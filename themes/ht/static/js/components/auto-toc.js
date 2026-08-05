// AutoTableOfContents Web Component
//
//     This component generates a table of contents (TOC).
//     Insert the <auto-toc> element in your HTML where you want the TOC to appear.
//
// Usage:
//
//     <auto-toc></auto-toc>
//     <auto-toc selectors='[id]'></auto-toc>
//     <auto-toc selectors='h3,h4,h5,h6,dl:not(:has(learn-more)) dt'></auto-toc>
//     <auto-toc scope='body' selectors='h2,h3,h4,h5,h6'></auto-toc>
//
// Options:
//
//     scope (string)
//         The parent element to search for heading elements in.
//
//     selectors (string, comma-separated list)
//         A comma-separated list of element selectors to include in the TOC.
//
//     trim (string, comma-separated list)
//         A comma-separated list of characters to trim from the TOC items (e.g., "¶,•").
//
// © 2025 Herd Works (https://herd.works)
class AutoTableOfContents extends HTMLElement {

    // static properties
    static tagName = "auto-toc";

    // instance properties
    scope;
    selectors;
    trim;

    // private/internal properties
    #content;
    #builtins = [ "[data-toc]" ]
    #elements = [];
    #rank = [ "dd", "dt", "dl", "h6", "h5", "h4", "h3", "h2", "h1" ];

    // lifecycle methods
    constructor() { super() };

    connectedCallback() {
        if (document.readyState == "complete" || document.readyState == "interactive") {
            this.render();
        } else {
            document.addEventListener("DOMContentLoaded", this);
        };
    };

    // event handler methods
    async handleEvent(event) { await this[`on${event.type}`](event) }; // event router

    async onDOMContentLoaded(event) { this.render() };

    // instance methods
    render() {
        this.scope = this.getAttribute("scope") || "main, article, section, body";
        this.selectors = this.getAttribute("selectors") || this.getAttribute("include") || "h2, h3, h4, h5, h6";
        this.trim = this.getAttribute("trim") || this.getAttribute("exclude") || "¶,•";
        this.#content = this.closest(this.scope); // find the closest ancestor matching scope
        this.#elements = Array.from(this.#content.querySelectorAll(`[data-toc], :is(${this.selectors})`));
        if (!this.querySelector("menu")) { this.appendChild(document.createElement("menu")) };
        this.querySelector("menu").appendChild(this.list());
    };

    list() {
        let ul = document.createElement("ul");
        while (this.#elements.length > 0) {
            let element = this.#elements.shift();
            let next = this.#elements[0];
            let li = document.createElement("li");
            let link = document.createElement("a");
            let href = element.getAttribute("href") || `#${element.id}`
            let label = element.title || element.innerText || ""
            li.appendChild(link);
            link.setAttribute("href", href);
            link.innerText = label;
            for (let char of this.trim.split(",")) { link.innerText = link.innerText.replace(char, "") };
            if (this.level(element) > this.level(next)) {
                li.appendChild(this.list(this.#elements));
            }
            ul.appendChild(li);
            if (this.level(element) < this.level(next)) { break };
        };
        return ul;
    };

    level(incoming) {
        if (!incoming || !incoming.tagName) { return -1 };
        if (!!incoming.dataset.toc) { return this.#rank.indexOf(incoming.dataset.toc) }
        return this.#rank.indexOf(incoming.tagName.toLowerCase());
    };

    // static methods
    static register() {
        if (!this.tagName) { console.debug(`component ${this.name}.tagName is required for registration`); return }; // guard
        if (customElements.get(this.tagName) || customElements.getName(this)) { return }; // guard
        if (document.readyState == "complete" || document.readyState == "interactive") {
            customElements.define(this.tagName, this);
        } else {
            document.addEventListener("DOMContentLoaded", customElements.define(this.tagName, this));
        };
        console.debug(`component "${this.tagName}" registered`);
    };

};
AutoTableOfContents.register();
