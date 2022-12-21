const debug = process.env.NODE_ENV !== "production";

module.exports = {
  basePath: "/my/nested/app",
  assetPrefix: !debug ? "/my/nested/app/" : "",
  experimental: {
    runtime: "experimental-edge",
    appDir: true,
  },
};
