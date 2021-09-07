const express = require("express");
const cors = require("cors");

const fs = require('fs');
const http = require('http');
const https = require('https');

const privateKey  = fs.readFileSync('./privkey.pem', 'utf8');
const certificate = fs.readFileSync('./fullchain.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};

const app = express();

app.use(cors());
app.use(express.json())


require("./routes/order.routes.js")(app);
require("./routes/entries.routes.js")(app);
require("./routes/product.routes.js")(app);

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);