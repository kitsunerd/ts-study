const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  const headers = {
    "X-Riot-Token": process.env.REACT_APP_RIOT_TOKEN,
  };
  app.use(
    createProxyMiddleware(process.env.REACT_APP_RIOT_ACCOUNT_CONTEXT, {
      target: process.env.REACT_APP_TARGET_ASIA_URL,
      changeOrigin: true,
      headers: headers,
    })
  );
  app.use(
    createProxyMiddleware(process.env.REACT_APP_RIOT_SUMMONER_CONTEXT, {
      target: process.env.REACT_APP_TARGET_JP_URL,
      changeOrigin: true,
      headers: headers,
    })
  );
  app.use(
    createProxyMiddleware(process.env.REACT_APP_RIOT_CLASH_CONTEXT, {
      target: process.env.REACT_APP_TARGET_JP_URL,
      changeOrigin: true,
      headers: headers,
    })
  );
};
