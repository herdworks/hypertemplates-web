customElements.apply("hyper-finder", class HyperFinder extends HTMLElement {

    // attributes
    feed;
    urls;

    // lifecycle methods
    constructor() {
        super();
    };
    async connectedCallback() {
        this.form.q.value = new URLSearchParams(window.document.location.search).get("q");
        await this.find();
        this.addEventListener("input", this);
        this.addEventListener("submit", this);
    };

    // getters
    get parser() {
        return new DOMParser();
    };
    get src() {
        return this.getAttribute("src") ? this.getAttribute("src") : "atom.xml";
    };
    get form() {
        return this.querySelector("form");
    };
    get input() {
        return this.form.querySelector("input[name='q']");
    }
    get query() {
        return this.input.value.trim().toLowerCase();
    };
    get scope() {
        return this.getAttribute("scope") ? this.getAttribute("scope") : "main";
    };
    get target() {
        return this.getAttribute("target") ? this.getAttribute("target") : "hyper-finder + *";
    };
    get results() {
        return this.parentElement.querySelector(this.target);
    };

    // helpers
    reset() {
        let staleResults = this.parentElement.querySelectorAll("search-result");
        console.debug("removing %s stale results", staleResults.length);
        for (let result of staleResults) {
            this.results.removeChild(result);
        };
    };
    async find() {
        console.debug(`finding "${this.query}" results`);
        this.reset();
        this.updateAddress();
        if (this.query.length == 0) { return };
        if (!this.feed) { await this.fetchFeed() };
        if (!this.urls) { await this.fetchFeedURLs() };
        for (let url of this.urls) {
            await this.searchFeedItem(url, this.query);
        };
    };
    async fetchFeed() {
        console.debug("fetching feed: %s", this.src);
        let response = await fetch(this.src);
        let contenttype = response.headers.get("Content-Type");
        let xml = await response.text();
        this.feed = this.parser.parseFromString(xml, contenttype);
    };
    async fetchFeedURLs() {
        let entries = this.feed.querySelectorAll("entry"); // NodeList of Element objects
        let urls = [];
        for (let entry of entries) {
            let link = entry.querySelector("link");
            let href = link.getAttribute("href");
            if (!href) { continue }; // guard
            let url = new URL(href);
            urls.push(url);
        }
        this.urls = urls;
    };
    async searchFeedItem(url, query) {
        let response = await fetch(url);
        if (!response.ok) { return }; // guard
        let text = await response.text();
        let document = this.parser.parseFromString(text, "text/html");
        if (!(document instanceof Document)) { return }; // guard
        let scope = document.querySelector(this.scope);
        if (!scope) { console.debug(`no "${this.scope}" scope found in ${url.href}`); return }; // guard
        if (!scope.innerText.toLowerCase().includes(query)) { return }; // continue
        console.debug("found \"%s\" in %s", query, url.href);
        this.addSearchResult(url, document);
    };
    addSearchResult(url, document) {
        let item = window.document.createElement("search-result");
        let itemlink = window.document.createElement("a");
        let itemlinktitle = window.document.createElement("h3");
        let itemlinkhref = window.document.createElement("small");
        let itemlinkdescription = window.document.createElement("p");
        itemlink.href = url.href;
        itemlinktitle.innerText = document.title;
        itemlinkhref.innerText = url.href;
        itemlinkdescription.innerText = document.querySelector("meta[name='description']").content;
        itemlink.appendChild(itemlinktitle);
        itemlink.appendChild(itemlinkhref);
        itemlink.appendChild(itemlinkdescription);
        item.appendChild(itemlink);
        this.results.appendChild(item);
    };
    updateAddress() {
        let url = new URL(window.document.location);
        url.search = new URLSearchParams({ q: this.query.trim() }).toString();
        window.history.pushState({}, '', url.href);
    }
    async sleep(ms) {
        return new Promise( function(resolve) {
            setTimeout(resolve, ms);
        });
    };

    // event handler methods
    async handleEvent(event) {
        console.debug(`handling "${event.type}" event`);
        await this[`on${event.type}`](event);
    };
    async onclick(event) {
        console.debug(`clicked ${event.target} element`);
    };
    async oninput(event) {
        clearTimeout(this.debounce);
        this.debounce = setTimeout(this.find.bind(this), 500);
    };
    async onsubmit(event) {
        await this.find();
    };

});
