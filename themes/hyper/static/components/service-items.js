customElements.define("service-items", class WebComponent extends HTMLElement {
    constructor() {
        super();
        this.render();
    };
    render() {
        let prices = this.querySelectorAll("span[itemprop='price']");
        for (let price of prices) {
            price.innerText = "$" + price.innerText;
        }
    };
});