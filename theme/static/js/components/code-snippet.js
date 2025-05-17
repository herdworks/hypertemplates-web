// CodeSnippet Web Component
class CodeSnippet extends HTMLElement {

    // static attributes
    static tagName = "code-snippet";

    // instance attributes

    // lifecycle methods
    constructor() {
        super();
    };
    connectedCallback() {
        this.appendChild(this.template);
        this.querySelector("window-chrome span").textContent = this.getAttribute("filename") || "example.txt";
        this.querySelector("window-content").appendChild(this.code);
        this.highlight();
    };

    // getter methods
    get template() {
        let windowChrome = document.createElement("window-chrome");
        for (i of Array(3)) { windowChrome.appendChild(document.createElement("button")) };
        windowChrome.childNodes.forEach( function(e) { e.setAttribute("role", "presentation") });
        windowChrome.appendChild(document.createElement("span"));
        windowContent = document.createElement("window-content");
        let codeSnippet = document.createElement("code-snippet");
        codeSnippet.appendChild(windowChrome);
        codeSnippet.appendChild(document.createElement("window-content"));
    }
    get code() {
        return this.querySelector("pre:has(code)");
    }
    get lines() {
        return Array.from(this.querySelectorAll(".line"));
    }
    get highlights() {
        let range = this.getAttribute("highlight") || this.getAttribute("highlights") || "";
        let ranges = range.split(",").map(this.range.bind(this));
        return ranges.flat();
    };

    // helper methods
    highlight() {
        let highlights = this.highlights;
        if (highlights.length == 0) { return };
        for (let [number, line] of this.lines.entries()) {
            if (highlights.includes(number + 1)) {
                line.classList.add("highlighted");
            };
        };
    };

    range(r) {
        let range = r.split("-").flatMap(function(i){ return parseInt(i) || [] });
        return this.fill(range);
    }

    fill(r=[]) {
        let start = Math.min(...r);
        let end = Math.max(...r);
        for (let i = start + 1; i < end; i++) {
            r.push(i);
        }
        r.sort(function(a, b){ return a - b });
        return r;
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
CodeSnippet.register();
