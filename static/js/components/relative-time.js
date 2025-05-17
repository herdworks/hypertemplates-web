// RelativeTime Web Component
class RelativeTime extends HTMLElement {
    // static properties
    static tagName = "relative-time";

    // instance properties
    timestamp;

    // lifecycle methods
    constructor() { super() };
    connectedCallback() {
        if (!this.datetime) { return }; // no timestamp, no date
        let element = this.querySelector("time");
        if (!(element instanceof HTMLElement)) { return };
        element.setAttribute("title", this.date);
        element.innerText = this.relativeTime(this.date);
    };

    // getters
    get datetime() {
        let date = this.querySelector("[datetime]");
        if (!date) { return null };
        return date.getAttribute("datetime");
    }
    get date() {
        if (!this.timestamp) { this.timestamp = this.datetime };
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
        var diff = Math.round((new Date() - date) / 1000); // round to the nearest second
        var unit;
        switch(true) {
            case (diff > 31536000):
                diff = (Math.round(diff/31536000)); // round to the nearest number of years
                unit = "year";
                break;
            case (diff > 2592000):
                diff = (Math.round(diff/2592000)); // round to the nearest number of months
                unit = "month";
                break;
            case (diff > 604800):
                diff = (Math.round(diff/604800)); // round to the nearest number of weeks
                unit = "week";
                break;
            case (diff > 86400):
                diff = (Math.round(diff/86400)); // round to the nearest number of days
                unit = "day";
                break;
            case (diff > 3600):
                diff = (Math.round(diff/3600)); // round to the nearest number of hours
                unit = "hour";
                break;
            case (diff > 60):
                diff = (Math.round(diff/60)); // round to the nearest number of minutes
                unit = "minute";
                break;
            case (diff > 0):
                diff = Math.round(diff); // round to the nearest number of seconds
                unit = "second";
                break;
            default:
                unit = "future";
        }
        var relativeTime = rtf.format(-diff, unit);
        return relativeTime;
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
RelativeTime.register();
