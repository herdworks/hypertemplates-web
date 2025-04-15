customElements.apply("doc-breadcrumbs", class DocBreadcrumbs extends HTMLElement {

    // attributes
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
        let template = this.querySelector("template");
        if (!!template) {
            return template.content.cloneNode(true);
        }
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
            let title = page.querySelector("title, h1");
            if (!title) { continue }

            let breadcrumb = this.breadcrumb;
            breadcrumb.querySelector("a").href = new URL(crumb, window.document.location).href;
            breadcrumb.querySelector("a").textContent = title.textContent;
            this.appendChild(breadcrumb);
        };
    }

});
