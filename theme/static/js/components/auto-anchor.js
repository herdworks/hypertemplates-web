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
    async connectedCallback() {
        this.scope = this.getAttribute("scope") || "body";
        this.anchorsAway();
    };

    // event handler methods
    async handleEvent(event) {
        // console.debug(`handling "${event.type}" event`);
        await this[`on${event.type}`](event);
    };
    async onDOMContentLoaded(event) {
        // console.debug(`content ${event.target} loaded`);
        this.anchorsAway();
    };

    // getter methods
    get headings() {
        return Array.from(document.querySelectorAll(`${this.scope} :is(h2, h3, h4, h5, h6)`));
    };
    get definitions() {
        return Array.from(document.querySelectorAll(`${this.scope} :is(dl dt)`));
    }

    // AutoAnchor().anchorsAway() method
    //
    // Adds anchor links with the ¶ symbol to headings and definition terms
    anchorsAway() {
        for (let anchor of [].concat(this.headings, this.definitions)) {
            anchor.id = this.kabob(anchor.innerText);
            let link = document.createElement("a");
            link.setAttribute("rel", "anchor");
            link.setAttribute("href", `#${anchor.id}`);
            link.innerText = " ¶";
            anchor.appendChild(link);
        };
    };

    kabob(text) {
        text = text.toLowerCase().replace(/[^a-z0-9_]+/g, "-");
        return text.replace(/^-+|--|-+$/g, "");
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
AutoAnchor.register();
