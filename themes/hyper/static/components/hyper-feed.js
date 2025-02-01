customElements.define("hyper-feed", class HyperFeed extends HTMLElement {

    // attributes
    src;
    selector;
    feed;
    urls;
    limit;
    cursor;

    // lifecycle methods
    constructor() {
        super();
    };
    async connectedCallback() {
        this.init();
        await this.load();

        // emulate infinite scroll (user scrolls for 5s, then clicks "more" button)
        await this.sleep(5000);
        await this.load(); // 😍
    };
    get parser() {
        return new DOMParser();
    };
    init() {
        this.src = this.getAttribute("feed-src") ? this.getAttribute("feed-src") : "index.xml";
        this.selector = this.getAttribute("feed-selector") ? this.getAttribute("feed-selector") : "article";
        this.limit = parseInt(this.getAttribute("feed-limit") ? this.getAttribute("feed-limit") : 10);
        this.cursor = 0;
    };
    async load() {
        if (!this.feed) { await this.fetchFeed() };
        if (!this.urls) { await this.fetchFeedURLs() };
        for (let url of this.urls.slice(this.cursor, this.cursor + this.limit)) {
            await this.fetchFeedItem(url);
        };
        this.cursor = this.cursor + this.limit; // pagination
    };
    async fetchFeed() {
        console.debug("feed %s fetching...", this.getAttribute("feed-src"));
        let response = await fetch(this.src);
        let contenttype = response.headers.get("Content-Type");
        let xml = await response.text();
        this.feed = this.parser.parseFromString(xml, contenttype);
    };
    async fetchFeedURLs() {
        console.debug("parsing urls from feed")
        let items = this.feed.querySelectorAll("item"); // NodeList of Element objects
        let urls = [];
        for (let item of items) {
            let href = item.querySelector("link").textContent;
            let url = new URL(href, document.location);
            urls.push(url);
        }
        this.urls = urls;
        console.debug("parsed %s urls from feed", urls.length);
    };
    async fetchFeedItem(url) {
        console.debug("item %s fetching...", url.href);
        let response = await fetch(url);
        let text = await response.text();
        let html = this.parser.parseFromString(text, "text/html");
        this.patchRelativeURLs(html, url);
        let item = document.createElement("feed-item");
        let itemlink = html.createElement("a");
        let hypertext = html.querySelector(this.selector);
        if (!(hypertext instanceof Node)) { return }; // guard
        itemlink.href = url.href;
        itemlink.appendChild(hypertext);
        item.appendChild(itemlink);
        this.appendChild(item);
    };
    patchRelativeURLs(html, base) {
        if (!(html instanceof Node)) { return } // guard
        for (let element of html.querySelectorAll("[href],[src]")) {
            let attr = null;
            switch (true) {
                case !!element.href: attr = "href"; break;
                case !!element.src: attr = "src"; break;
                default: continue;
            }
            let href = element.getAttribute(attr);
            let src = new URL(href, base);
            element.setAttribute(attr, src.href);
        };
    };
    async sleep(ms) {
        return new Promise( function(resolve) {
            setTimeout(resolve, ms);
        });
    };
});
