// DismissButton Web Component
//
// Dismisses (removes) an ancestor element from the DOM on click.
//
// Usage:
//
//     dismisses (string)
//         A CSS selector for the nearest ancestor that should be dismissed on click.
//
//     id (string)
//         The identifier to use for storing the dismissal in localstorage.
//
// © 2025 Herd Works (https://herd.works)
class DismissButton extends HTMLElement {

    // static properties
    static tagName = "dismiss-button";

    // instance properties
    id;
    dismisses;
    toggle;
    delay;

    // lifecycle methods
    constructor() { super() };
    async connectedCallback() {
        this.id = this.getAttribute("id") || "default";
        this.dismisses = this.getAttribute("dismisses");
        this.toggle = this.getAttribute("toggle");
        this.delay = parseInt(this.getAttribute("delay")) || 250;
        if (document.readyState == "complete" || document.readyState == "interactive") {
            await this.init()
        } else {
            document.addEventListener("DOMContentLoaded", this);
        };
    };

    // event handler methods
    async handleEvent(event) { await this[`on${event.type}`](event) }; // event router
    async onDOMContentLoaded(event) { this.init() };
    async onclick(event) {
        console.debug("dismiss-button clicked!")
        await this.dismiss()
    };

    // instance getters
    get target() {
        return this.closest(this.dismisses) || this.parentElement;
    }
    get key() {
        return ["dismissed", this.id].join("/")
    }

    // instance methods
    async init() {
        if (!!window.localStorage.getItem(this.key)) { await this.dismiss() } else { await this.reveal() }
        this.addEventListener("click", this);
    };
    async reveal() {
        await new Promise(resolve => setTimeout(resolve, 100));
        this.target.classList.remove(this.toggle);
    }
    async dismiss() {
        window.localStorage.setItem(this.key, true);
        this.target.classList.add(this.toggle);
        // await new Promise(resolve => setTimeout(resolve, this.delay));
        this.target.remove();
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
DismissButton.register();
