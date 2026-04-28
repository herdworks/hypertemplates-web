class DocBreadcrumbs extends HTMLElement {

    // static properties
    static tagName = "doc-breadcrumbs";

    // instance properties
    url;

    // lifecycle methods
    constructor() {
        super();
    };
    async connectedCallback() {
        this.url = new URL(window.document.location);
        await this.render();
    };

    // getters
    get parser() {
        return new DOMParser();
    };

    get breadcrumbs() {
        let crumbs = [];
        let path = [""];
        for (let crumb of this.url.pathname.split("/").filter(Boolean)){
            path.push(crumb);
            crumbs.push(path.join("/") + "/");
        };
        return crumbs;
    };

    get breadcrumb() {
        let breadcrumb = document.createElement("doc-breadcrumb");
        let anchor = document.createElement("a");
        let img = document.createElement("img");
        img.setAttribute("src", "/icons/chevron-right-thin.svg");
        anchor.setAttribute("href", "#");
        breadcrumb.appendChild(anchor);
        breadcrumb.appendChild(img);
        return breadcrumb;
    };

    // helpers
    async render() {
        for (let crumb of this.breadcrumbs) {
            let response = await fetch(crumb);
            if (!response.ok) { continue };

            let html = await response.text();
            let parser = new DOMParser();
            let page = parser.parseFromString(html, "text/html");
            // if (page.querySelector('main').textContent == "") { continue }
            let title = (page.querySelector("meta[name=breadcrumb]") || {}).content;
            if (!title) { continue }

            let breadcrumb = this.breadcrumb;
            breadcrumb.querySelector("a").href = new URL(crumb, window.document.location).href;
            breadcrumb.querySelector("a").textContent = title;
            this.appendChild(breadcrumb);
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
DocBreadcrumbs.register();
