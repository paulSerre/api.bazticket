const express = require("express");
const cors = require("cors");

const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey  = fs.readFileSync('./ssl.key', 'utf8');
const certificate = fs.readFileSync('./ssl.cert', 'utf8');

var credentials = {key: privateKey, cert: certificate};
const app = express();

app.use(cors());
app.use(express.json())
// simple route
/*
require("./routes/task.routes.js")(app);
require("./routes/folder.routes.js")(app);
*/
require("./routes/wordpress.routes.js")(app);
require("./routes/entries.routes.js")(app);
// set port, listen for requests
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);