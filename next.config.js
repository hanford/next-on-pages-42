const debug = process.env.NODE_ENV !== "production";

module.exports = {
  basePath: "/my/nested",
  assetPrefix: !debug ? "/my/nested/" : "",
  experimental: {
    runtime: "experimental-edge",
    appDir: true,
  },
};
