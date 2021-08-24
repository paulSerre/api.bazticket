const apiConfig = require("../config/wordpressapi.config.js")


const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerce = new WooCommerceRestApi({
  url: apiConfig.url,
  consumerKey: apiConfig.consumerKey,
  consumerSecret: apiConfig.consumerSecret,
  wpAPI: apiConfig.wpAPI,
  version: apiConfig.version
});

module.exports = WooCommerce;