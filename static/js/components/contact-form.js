customElements.define("web-component", class WebComponent extends HTMLElement {

    // lifecycle methods
    constructor() {
        super();
        this.init();
    };
    connectedCallback() {};

    // getter methods
    get form() {
        return this.querySelector("form");
    }

    // helper methods
    init() {
        this.form.addEventListener("submit", this.submit.bind(this));
    };

    submit(event) {
        event.preventDefault();
        let data = Object.fromEntries(new FormData(this.form).entries());
        let req = new Request(this.form.action)
    }

});
