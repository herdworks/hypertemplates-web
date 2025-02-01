customElements.apply("date-time", class DateTime extends HTMLElement {

    // attributes
    timestamp;

    // lifecycle methods
    constructor() {
        super();
    };
    connectedCallback() {
        this.init();
    };

    // helper methods
    init() {
        if (!this.dataset.timestamp) { return }; // no timestamp, no date
        this.timestamp = this.dataset.timestamp;
        let element = this.querySelector("span");
        if (!(element instanceof HTMLElement)) { return };
        element.setAttribute("title", this.date);
        element.innerText = this.relativeTime(this.date);
    };
    get date() {
        if (!this.timestamp) { this.timestamp = this.dataset.timestamp };
        if (!this.timestamp) { this.timestamp = Date.now() };
        return new Date(this.timestamp);
    }

    // DateTime().relativeTime() method
    // 
    // NOTES:
    // * uses Math.round() for seconds, minutes, hours, and days
    // * uses Math.ceil() for weeks, months, and years
    relativeTime(date=null) {
        if (date == null) { return "future" };
        var rtf = new Intl.RelativeTimeFormat('en', { style: 'long', numeric: 'auto' });
        var diff = Math.round((new Date() - date) / 1000); // seconds
        var unit;
        switch(true) {
            case (diff > 31536000): 
                diff = (Math.ceil(diff/31536000)); 
                unit = "year";
                break;
            case (diff > 2592000): 
                diff = (Math.ceil(diff/2592000)); 
                unit = "month";
                break;
            case (diff > 604800): 
                diff = (Math.ceil(diff/604800));
                unit = "week";
                break;
            case (diff > 86400): 
                diff = (Math.round(diff/86400)); 
                unit = "day";
                break;
            case (diff > 3600): 
                diff = (Math.round(diff/3600)); 
                unit = "hour";
                break;
            case (diff > 60): 
                diff = (Math.round(diff/60)); 
                unit = "minute";
                break;
            case (diff > 0): 
                diff = Math.round(diff); 
                unit = "second";
                break;
            default:
                unit = "future";
        }
        var relativeTime = rtf.format(-diff, unit);
        return relativeTime;
    };
});
