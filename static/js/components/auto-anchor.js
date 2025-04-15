customElements.apply("auto-anchor", class AutoAnchor extends HTMLElement {

    // attributes
    scope;

    // lifecycle methods
    constructor() {
        super();
    };
    connectedCallback() {
        this.init();
    };

    // getter methods
    get headings() {
        return document.querySelectorAll(`${this.scope} :is(h1, h2, h3, h4, h5, h6)`);
    };

    // helper methods
    init() {
        // document.addEventListener("DOMContentLoaded", this);
        this.scope = this.getAttribute("scope") || "main";
        this.anchor();
    };

    // AutoAnchor().anchor() method
    // automatically adds anchor links with the ¶ symbol to headings
    anchor() {
        for (let heading of this.headings) {
            let link = document.createElement("a");
            link.setAttribute("rel", "anchor");
            link.setAttribute("href", `#${heading.id}`);
            link.innerText = "  ¶";
            heading.appendChild(link);
        };
    };

    // event handler methods
    async handleEvent(event) {
        console.debug(`handling "${event.type}" event`);
        await this[`on${event.type}`](event);
    };
    async onDOMContentLoaded(event) {
        console.debug(`content ${event.target} loaded`);
        this.anchor();
    };

});
