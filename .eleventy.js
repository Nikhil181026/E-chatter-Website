
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin/config.yml");

  // Existing BGMI news collection
  eleventyConfig.addCollection("bgmi_news", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("news/articles/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // New News to Grow collection
  eleventyConfig.addCollection("growth_news", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("news/growth/articles/*.md")
      .sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
