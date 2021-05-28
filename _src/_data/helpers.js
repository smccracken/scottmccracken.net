const fs = require("fs");
const moment = require("moment");
const uglifycss = require("uglifycss");

module.exports = {
    getCDN() {
        return process.env.ELEVENTY_ENV === "development"
            ? "http://cdn3.carcomplaints.com/oilsludge"
            : "http://cdn2.carcomplaints.com/oilsludge";
    },
    getEnvironment() {
        return process.env.ELEVENTY_ENV;
    },
    getCopyrightYear() {
        const todayYear = Number(moment().format("YYYY"));
        const foundingYear = 2007;

        if (todayYear === foundingYear) {
            return `${foundingYear}`;
        }

        return `${foundingYear} – ${todayYear}`;
    },
    getCSS(coreStyles, layoutStyles) {
        let css = "";
        let partials = [];

        if (coreStyles) {
            partials = [...partials, ...coreStyles];
        }

        if (layoutStyles) {
            partials = [...partials, ...layoutStyles];
        }

        //css += fs.readFileSync(`${__dirname}/tmp/css/reset.css`, 'utf-8');
        //css += fs.readFileSync(`${__dirname}/tmp/css/tokens.css`, 'utf-8');

        if (partials.length) {
            partials.forEach((partial) => {
                css += fs.readFileSync(`./_src/_includes/css/${partial}`);
            });
        }

        return uglifycss.processString(css);
    },
    getLinkActiveState(itemUrl, pageUrl) {
        let response = "";

        if (itemUrl === pageUrl) {
            response = ' aria-current="page"';
        }

        if (pageUrl.indexOf(itemUrl) === 0) {
            response += ' data-state="active"';
        }

        return response;
    },
};
