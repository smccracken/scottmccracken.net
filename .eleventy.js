const htmlmin = require('html-minifier');
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

const filters = require('./_11ty/filters.js');
const isProduction = process.env.ELEVENTY_ENV === 'production'

module.exports = function(eleventyConfig) {
  	// Filters
  	Object.keys(filters).forEach(filterName => {
    	eleventyConfig.addFilter(filterName, filters[filterName])
  	});

  	// Plugins
	eleventyConfig.addPlugin(pluginRss);
  	eleventyConfig.addPlugin(pluginSyntaxHighlight);

	// Passthroughs
	eleventyConfig.addPassthroughCopy("_src/_assets");

	// Markdown Processing
	let markdownIt = require("markdown-it");
	let markdownItAnchor = require("markdown-it-anchor");
	let options = {
    	html: true,
    	breaks: true,
    	linkify: true
  	};
  	let opts = {
    	permalink: true,
    	permalinkClass: 'direct',
    	permalinkSymbol: ''
  	};

  	eleventyConfig.setLibrary("md", markdownIt(options)
    	.use(markdownItAnchor, opts)
  	);

  	// Collection: Tags
  	eleventyConfig.addCollection("tags", require("./_11ty/getTagList.js"));

  	// Collection: Navigation
	eleventyConfig.addCollection('nav', function(collection) {
    	return collection.getFilteredByTag('nav').sort(function(a, b) {
      		return a.data.navorder - b.data.navorder
    	})
	});

	// Collection: home page sections
	eleventyConfig.addCollection("sections", function(collection) {
		return collection.getAllSorted().filter(function(item) {
			return item.inputPath.match(/^\.\/_src\/sections\//) !== null;
		}).sort(function(a, b) {
			return b.data.order - a.data.order;
		});
	});

	// Collection: Work
	eleventyConfig.addCollection("work", function(collection) {
		return collection.getFilteredByGlob('**/work/*.md').sort(function(a, b) {
      		return a.data.order - b.data.order
    	})
	});

	// Minify HTML Output
    eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
        if (outputPath.endsWith('.html') && isProduction) {
            return htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            })
        }
        return content
    });

      // Layout Aliases
  	eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  	eleventyConfig.addLayoutAlias('resume', 'layouts/resume.njk');
  	eleventyConfig.addLayoutAlias('section', 'layouts/section.njk');

	// Base config
	return {
		templateFormats: [
			"md",
			"njk",
			"html"
		],

		pathPrefix: "/",
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		passthroughFileCopy: true,
		dir: {
			input: "_src",
			includes: "_includes",
			data: "_data",
			output: "_site"
		}
	};
};
