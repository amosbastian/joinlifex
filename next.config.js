const withTM = require("next-transpile-modules")(["next-slicezone"]);

module.exports = withTM({
  webpack5: true,
});
