class FooterMenu extends HTMLElement {
    // static properties
    static tagName = "footer-menu";

    // instance properties

    // lifecycle methods
    constructor() {
        super();
    };
    connectedCallback() {
        let menu = document.createElement("menu");
        let groups = new Set();
        for (let link of this.querySelectorAll("a[rel]")) {
            if (link.getAttribute("rel") == "") { continue };
            groups.add(link.getAttribute("rel"));
            this.setTarget(link);
        };
        for (let group of groups) {
            let column = document.createElement("menu-group");
            let header = document.createElement("h5");
            header.innerText = group;
            column.appendChild(header);
            let links = this.querySelectorAll(`a[rel="${group}"]`);
            for (let link of links) { column.appendChild(link) };
            menu.appendChild(column);
        };
        this.setAttribute("columns", groups.size);
        this.appendChild(menu);
    };

    // helper methods
    setTarget(anchor) {
        if (new URL(anchor.href).hostname != window.location.hostname) {
            anchor.target = "_blank";
        }
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
FooterMenu.register();
