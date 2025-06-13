// EditThisPage Web Component
//
// Inserts a link to edit the current page via GitHub whereever an <edit-this-page> element is added.
// Uses the current page path (e.g. document.location.pathname) to dynamically generate GitHub "edit" URLs.
// Wraps the .innerHTML of <edit-this-page> elements in anchor tags.
//
// The URL scheme is as follows:
//
//     https://:host/:org/:repo/edit/:branch/:prefix/:document.location.pathnam/:suffix/:filename
//
// Example
//
//     The following element is used in pages on https://hypertemplates.net:
//
//     <edit-this-page org='herdworks' repo='hypertemplates-web'>
//         Edit this page on GitHub
//     </edit-this-repo>
//
//     The page https://hypertemplates.net/docs/reference/cli/ would result in a link to:
//
//     https://github.com/herdworks/hypertemplates-web/edit/main/content/docs/reference/cli/index.md
//
// Usage:
//
//     host (string)
//         The target hostname (defaults to "github.com").
//         Provide a custom hostname for GitHub Enterprise deployments.
//  
//     org (string) (required)
//         The target organization name.
//  
//     repo (string) (required)
//         The target repository name.
//  
//     branch (string)
//         The target branch name (defaults to "main").
//  
//     prefix (string)
//         The path prefix (defaults to "content").
//  
//     suffix (string)
//         The path suffix (defaults to "index.md").
//
//     rel (string)
//         The link relation (defaults to "source").
//  
// © 2025 Herd Works (https://herd.works)
class EditThisPage extends HTMLElement {

    // static properties
    static tagName = "edit-this-page";

    // instance properties
    host;
    org;
    repo;
    branch;
    prefix;
    suffix;
    rel;

    // lifecycle methods
    constructor() { super() };
    connectedCallback() {
        this.host = this.getAttribute("host") || "github.com";
        this.org = this.getAttribute("org");
        this.repo = this.getAttribute("repo");
        this.branch = this.getAttribute("branch") || "main";
        this.prefix = this.getAttribute("prefix") || "content";
        this.suffix = this.getAttribute("suffix") || "index.md";
        this.rel = this.getAttribute("rel") || "source";
        if (document.readyState == "complete" || document.readyState == "interactive") {
            this.render();
        } else {
            document.addEventListener("DOMContentLoaded", this);
        };
    };

    // event handler methods
    async handleEvent(event) { await this[`on${event.type}`](event) }; // event router
    async onDOMContentLoaded(event) { this.render() };

    // instance getters
    get template() {
        let a = document.createElement("a");
        a.rel = this.rel;
        a.href = this.href;
        a.innerHTML = this.innerHTML;
        return a;
    };
    get href() {
        let components = ["", this.org, this.repo, "edit", this.branch, this.prefix, document.location.pathname, this.suffix];
        let pathname = components.join("/").replaceAll("//", "/");
        return `https://${this.host}${pathname}`
    };

    // instance methods
    render() {
        if (!document.location.pathname.startsWith("/docs")) { return } // no-op
        let link = this.template;
        this.innerHTML = "";
        this.appendChild(link);
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
EditThisPage.register();
