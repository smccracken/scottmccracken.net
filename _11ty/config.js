const filters = require('./filters')
const shortcodes = require('./shortcodes')
const pluginRss = require("@11ty/eleventy-plugin-rss");
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function(eleventyConfig) {
	// Filters
  	Object.keys(filters).forEach(filterName => {
    	eleventyConfig.addFilter(filterName, filters[filterName])
  	});

  	// Shortcodes
  	Object.keys(shortcodes).forEach(shortCodeName => {
    	eleventyConfig.addShortcode(shortCodeName, shortcodes[shortCodeName])
  	});

	// Plugins
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
  	eleventyConfig.addPlugin(pluginRss);
  	eleventyConfig.addPlugin(pluginSyntaxHighlight);

	// Collections
	eleventyConfig.addCollection('bookmarks', collection => {
    	return collection.getFilteredByGlob('**/bookmarks/*.md').reverse()
	  });
	  
	eleventyConfig.addCollection('posts', collection => {
    	return collection.getFilteredByGlob('**/posts/*.md').reverse()
  	});

  	eleventyConfig.addCollection('work', collection => {
    	return collection.getFilteredByGlob('**/work/*.md').sort(function(a, b) {
          return a.data.order - b.data.order
      })
  	});

  	// Passthroughs
	eleventyConfig
	  	.addPassthroughCopy("_src/assets")
		.addPassthroughCopy('_src/_redirects')
		.addPassthroughCopy('_src/.htaccess')
  		.addPassthroughCopy("_src/manifest.json")
		.addPassthroughCopy("_src/robots.txt");

	return {
		templateFormats: ['html','njk','md'],
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		passthroughFileCopy: true,
		dir: {
			input: '_src',
			includes: '_includes',
			data: '_data',
			output: 'dist',
		  }
	}
}