
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin/config.yml");

  eleventyConfig.addCollection("bgmi_news", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("news/articles/*.md")
      .sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
