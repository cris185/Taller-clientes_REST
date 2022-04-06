const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://petstore.swagger.io/v2',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  );
};
