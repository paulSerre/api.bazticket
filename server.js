const express = require("express");
const cors = require("cors");

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
app.listen(8443, () => {
  console.log("Server is running on port 8443.");
});