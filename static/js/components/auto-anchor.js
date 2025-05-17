// AutoAnchor Web Component
class AutoAnchor extends HTMLElement {

    // static properties
    static tagName = "auto-anchor";

    // instance properties
    scope;

    // lifecycle methods
    constructor() {
        super();
    };
    connectedCallback() {
        this.scope = this.getAttribute("scope") || "body";
        this.anchor();
    };

    // event handler methods
    async handleEvent(event) {
        // console.debug(`handling "${event.type}" event`);
        await this[`on${event.type}`](event);
    };
    async onDOMContentLoaded(event) {
        // console.debug(`content ${event.target} loaded`);
        this.anchor();
    };

    // getter methods
    get headings() {
        return document.querySelectorAll(`${this.scope} :is(h2, h3, h4, h5, h6)`);
    };

    // AutoAnchor().anchor() method
    //
    // Adds anchor links with the ¶ symbol to headings
    anchor() {
        for (let heading of this.headings) {
            let link = document.createElement("a");
            link.setAttribute("rel", "anchor");
            link.setAttribute("href", `#${heading.id}`);
            link.innerText = "  ¶";
            heading.appendChild(link);
        };
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
AutoAnchor.register();
