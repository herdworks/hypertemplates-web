class ContactForm extends HTMLElement {

    // static properties
    static tagName = "contact-form";

    // lifecycle methods
    constructor() {
        super();
    };
    connectedCallback() {
        this.form.addEventListener("submit", this);
    };

    // event handler methods
    async handleEvent(event) {
        await this[`on${event.type}`](event);
    };
    async onsubmit(event) {
        event.preventDefault();
        let data = Object.fromEntries(new FormData(this.form).entries());
        let req = new Request(this.form.action)
        let res = await fetch(req, { method: "GET" });
        if (res.ok) {
            console.debug("Message sent successfully");
        } else {
            console.error("Error sending message");
        };
    };

    // getter methods
    get form() {
        return this.querySelector("form");
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
ContactForm.register();
