customElements.apply("ht-feed", class HyperFeed extends HTMLElement {

    // attributes
    src;
    selector;
    feed;
    posts;
    urls;
    limit;
    cursor;

    // lifecycle methods
    constructor() {
        super();
    };
    async connectedCallback() {
        this.init();
        document.addEventListener("DOMContentLoaded", this.load.bind(this));
        // emulate infinite scroll (user scrolls for 5s, then clicks "more" button)
        // await this.sleep(5000);
        // await this.load(); // 😍
    };

    // component getters
    get parser() {
        return new DOMParser();
    };

    get layout() {
        let template = this.querySelector("template");
        if (!!template) {
            return template.content.cloneNode(true);
        }
    }

    get dummy() {
        return document.createElement("null-element");
    }

    // component methods
    init() {
        this.src = this.getAttribute("feed-src") ? this.getAttribute("feed-src") : "index.xml";
        this.selector = this.getAttribute("feed-selector") ? this.getAttribute("feed-selector") : "article";
        this.limit = parseInt(this.getAttribute("feed-limit") ? this.getAttribute("feed-limit") : 10);
        this.cursor = 0;
        window.onpageshow = function(event) {
            if (event.persisted) {
                console.debug(event);
            }
        }
    };

    async load(event={}) {
        if (!this.feed) { await this.fetchFeed() };
        console.debug("fetched %s posts", this.posts.length);
        for (let post of this.posts.slice(this.cursor, this.cursor + this.limit)) {
            let url = this.getPostURL(post);
            let content = await this.fetchContent(url);
            await this.renderFeedItem(post, url, content);
        };
        this.cursor = this.cursor + this.limit; // pagination
    };

    async fetchFeed() {
        console.debug("fetching %s feed", this.getAttribute("feed-src"));
        let response = await fetch(this.src);
        let contenttype = response.headers.get("Content-Type");
        let xml = await response.text();
        this.feed = this.parser.parseFromString(xml, contenttype);
        this.posts = [];
        let posts = this.feed.querySelectorAll("entry, item"); // NodeList of Element objects
        for (let post of posts) {
            this.posts.push(post);
        };
    };

    async fetchContent(url) {
        if (!(url instanceof URL)) { console.error("url must be a URL object"); return }; // guard
        if (url.hostname != document.location.hostname) { console.debug("skipping %s post (CORS)", url.href); return }; // guard
        // console.debug("fetching %s post", url.href);
        let response = await fetch(url);
        let text = await response.text();
        return this.parser.parseFromString(text, "text/html");
    };

    getPostURL(post={}) {
        let link = post.querySelector("link[rel='related']");
        let href = link.getAttribute("href") || link.textContent;
        return new URL(href, document.location);
    };

    // post = atom <entry> element
    async renderFeedItem(post={}, url={}, html) {
        this.patchRelativeURLs(html, url);
        let hypertext = html.querySelectorAll(this.selector);
        if (!(hypertext instanceof NodeList)) { return }; // guard

        let feedpost = this.layout;
        let learnmore = feedpost.querySelector("learn-more a");
        learnmore.setAttribute("href", url.href);
        let link = feedpost.querySelector("post-body a");
        link.href = url.href;
        this.renderPostCard(post, url, feedpost);
        hypertext = Array.from(hypertext).filter(function(element){ return element.hasAttribute("summary") });
        for (let element of hypertext) { link.appendChild(element) }
        this.appendChild(feedpost);
    }

    // post = atom <entry> element
    renderPostCard(post, url, layout) {
        console.debug(`post card url: ${url.href}`);
        let nocontent = post.querySelector("content") == null;
        let author = post.querySelector("author"); // atom entry <author> element
        let contributor = post.querySelector("contributor"); // atom entry first <contributor> element
        if (nocontent && !!contributor) { author = contributor };
        let authorName = (author.querySelector("name") || this.dummy).textContent;
        let authorHref = (author.querySelector("uri") || this.dummy).textContent;
        let authorUsername = (author.querySelector("username") || this.dummy).textContent;
        let authorFavicon = (author.querySelector("favicon") || this.dummy).textContent;
        let postUpdated = post.querySelector("updated").textContent;

        let card = layout.querySelector("post-card");
        for (let element of card.querySelectorAll("a")) { element.href = authorHref };
        card.querySelector("[itemprop='favicon'] img").src = authorFavicon;
        card.querySelector("[itemprop='name']").innerText = authorName;
        card.querySelector("[itemprop='username']").innerText = authorUsername;
        card.querySelector("a:has(time)").href = url.href;
        card.querySelector("time").dateTime = postUpdated;
        card.querySelector("time").title = postUpdated;
        return card;
    }

    patchRelativeURLs(html, base) {
        if (!(html instanceof Node)) { return } // guard
        if (!base.pathname.endsWith("/")) { base.pathname = base.pathname + "/" };
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
