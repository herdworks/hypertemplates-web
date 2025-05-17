// AutoTableOfContents Web Component
class AutoTableOfContents extends HTMLElement {

    // static properties
    static tagName = "auto-toc";

    // instance properties
    scope;
    min;
    max;

    // lifecycle methods
    constructor() {
        super();
    };
    connectedCallback() {
        if (document.readyState == "complete" || document.readyState == "interactive") {
            this.render();
        } else {
            document.addEventListener("DOMContentLoaded", this);
        };
    };

    // event handler methods
    async handleEvent(event) {
        console.debug(`handling "${event.type}" event`);
        await this[`on${event.type}`](event);
    };
    async onDOMContentLoaded(event) {
        this.render();
    };

    // getter methods
    get levels() {
        return this.fill([this.min, this.max]);
    };
    get selector() {
        return this.levels.map(function(i){ return `h${i}` }).join(", ");
    }
    get headings() {
        let content = document.querySelector(this.scope);
        if (!content) { 
            console.debug(`[toc] no scope found for ${this.scope}`)
        };
        return Array.from(content.querySelectorAll(this.selector));
    };

    // helper methods
    render() {
        this.min = this.getAttribute("min") || 2;
        this.max = this.getAttribute("max") || 6;
        this.scope = this.getAttribute("scope") || "main, body";
        if (this.scope == "document") { this.scope = "html" }

        console.debug("generating TOC for levels: %s", this.selector);
        console.debug(this.headings);
    };

    fill(r=[]) {
        let start = Math.min(...r);
        let end = Math.max(...r);
        for (let i = start + 1; i < end; i++) {
            r.push(i);
        }
        r.sort(function(a, b){ return a - b });
        return r;
    };

    tree(headings) {
        let tree = [];
        for (let [index,heading] of headings.entries()) {
            let level = parseInt(heading.tagName.substring(1));
            let node = { level: level, text: heading.innerText, children: [] };
            if (parent) { parent.children.push(node) } else { tree.push(node) };
        }
    };

    // helper methods
    peak(array, index) {
        if (index == array.length) { return null };
        return array[index + 1];
    }

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
