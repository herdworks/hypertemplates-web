customElements.define("footer-menu", class FooterMenu extends HTMLElement {
    constructor() {
        super();
        this.render();
    };
    render() {
        let menu = document.createElement("menu");
        let groups = new Set();
        for (let link of this.querySelectorAll("a[rel]")) {
            if (link.getAttribute("rel") == "") { continue };
            groups.add(link.getAttribute("rel"));
            this.setTarget(link);
        };
        for (let group of groups) {
            let column = document.createElement("menu-group");
            let header = document.createElement("h6");
            header.innerText = group;
            column.appendChild(header);
            let links = this.querySelectorAll(`a[rel="${group}"]`);
            for (let link of links) { column.appendChild(link) };
            menu.appendChild(column);
        };
        this.setAttribute("columns", groups.size);
        this.appendChild(menu);
    };
    setTarget(anchor) {
        if (new URL(anchor.href).hostname != window.location.hostname) {
            anchor.target = "_blank";
        }
    }
});