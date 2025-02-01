export default class WebComponent extends HTMLElement {

    // attributes
    observedAttributes = ["example"];

    // lifecycle methods
    constructor() {
        super();
        this.init();
    };
    connectedCallback() {};
    disconnectedCallback() {};
    adoptedCallback() {};
    attributeChangedCallback(name, oldValue, newValue) {
        // NOTE: set observedAttributes to get change notifications via attributeChangedCallback()
        if ( newValue == null ) { return } // guard
        if ( oldValue == newValue ) { return } // guard
        this.noop();
        return
    };

    // helper methods
    init() {};

};
customElements.define("web-component", WebComponent);
