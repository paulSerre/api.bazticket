require('dotenv').config();

module.exports = {
    url: 'https://bazticket.com',
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    wpAPI: true,
    version: 'wc/v3'
}