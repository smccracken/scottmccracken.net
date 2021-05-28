const filters = require("./utils/filters.js");
const shortcodes = require("./utils/shortcodes.js");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
    // Filters
    Object.keys(filters).forEach((filterName) => {
        eleventyConfig.addFilter(filterName, filters[filterName]);
    });

    // Shortcodes
    Object.keys(shortcodes).forEach((shortCodeName) => {
        eleventyConfig.addShortcode(shortCodeName, shortcodes[shortCodeName]);
    });

    // Plugins
    eleventyConfig.addPlugin(pluginNavigation);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginSyntaxHighlight);

    // Collections
    eleventyConfig.addCollection("bookmarks", (collection) => {
        return collection.getFilteredByGlob("**/bookmarks/*.md").reverse();
    });

    eleventyConfig.addCollection("taggedBookmarks", function (collection) {
        let resultArrays = {};
        collection
            .getFilteredByGlob("**/bookmarks/*.md")
            .reverse()
            .forEach(function (item) {
                if (Array.isArray(item.data["tags"])) {
                    for (let topicTag of item.data["tags"]) {
                        if (!resultArrays[topicTag]) {
                            resultArrays[topicTag] = [];
                        }
                        resultArrays[topicTag].push(item);
                    }
                }
            });
        return resultArrays;
    });

    eleventyConfig.addCollection("posts", (collection) => {
        return collection.getFilteredByGlob("**/posts/*.md").reverse();
    });

    eleventyConfig.addCollection("projects", (collection) => {
        return collection.getFilteredByGlob("**/projects/*.md").reverse();
    });

    // Passthroughs
    eleventyConfig
        .addPassthroughCopy("_src/assets")
        .addPassthroughCopy("_src/_redirects")
        .addPassthroughCopy("_src/.htaccess")
        .addPassthroughCopy("_src/manifest.json")
        .addPassthroughCopy("_src/robots.txt");

    return {
        templateFormats: ["html", "njk", "md"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        passthroughFileCopy: true,
        dir: {
            input: "_src",
            includes: "_includes",
            data: "_data",
            output: "dist",
        },
    };
};
