// AutoTableOfContents Web Component
//
//     This component generates a table of contents (TOC).
//     Insert the <auto-toc> element in your HTML where you want the TOC to appear.
//
// Usage:
//
//     <auto-toc></auto-toc>
//     <auto-toc selectors='[id]'></auto-toc>
//     <auto-toc selectors='h3,h4,h5,h6,dl dt'></auto-toc>
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
    #rank = ["dd", "dt", "dl", "h6", "h5", "h4", "h3", "h2", "h1"];
    #content;
    #headings;

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
        this.scope = this.getAttribute("scope") || "main, article, section";
        this.selectors = this.getAttribute("selectors") || this.getAttribute("include") || "h2, h3, h4, h5, h6";
        this.trim = this.getAttribute("trim") || this.getAttribute("exclude") || "¶,•";
        this.#content = this.closest(this.scope); // find the closest ancestor matching scope
        this.#headings = Array.from(this.#content.querySelectorAll(`:is(${this.selectors})`));
        if (!this.querySelector("menu")) { this.appendChild(document.createElement("menu")) };
        this.querySelector("menu").appendChild(this.list());
    };

    list() {
        let ul = document.createElement("ul");
        while (this.#headings.length > 0) {
            let current = this.#headings.shift();
            let next = this.#headings[0];
            let li = document.createElement("li");
            let link = document.createElement("a");
            li.appendChild(link);
            link.setAttribute("href", `#${current.id}`);
            link.innerText = current.innerText;
            for (let char of this.trim.split(",")) { link.innerText = link.innerText.replace(char, "") };
            if (this.level(current) > this.level(next)) {
                li.appendChild(this.list(this.#headings));
            }
            ul.appendChild(li);
            if (this.level(current) < this.level(next)) { break };
        };
        return ul;
    };

    level(incoming) {
        if (!incoming || !incoming.tagName) { return -1 };
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
