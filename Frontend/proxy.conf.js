const PROXY_CONFIG = {
  "/login": {
    "target": "http://localhost:18000",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug"
  },
  "/api": {
    "target": "http://localhost:18000",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug",
    "pathRewrite": {
      "^/api": ""
    }
  }
};

module.exports = PROXY_CONFIG;

