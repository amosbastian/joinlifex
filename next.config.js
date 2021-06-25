const withTM = require("next-transpile-modules")(["next-slicezone"]);

module.exports = withTM({
  webpack5: true,
  images: {
    domains: ["images.prismic.io", "images.unsplash.com"],
    loader: "imgix",
    path: "https://images.prismic.io/joinlifex/",
  },
});
