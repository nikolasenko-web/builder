module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets");

	return {
		dir: {
			input: "src",
			output: "dist",
			includes: "_includes"
		},
		templateFormats: ["njk", "html"],
		htmlTemplateEngine: "njk"
	}
}
