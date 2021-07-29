module.exports = app => {
    const entry = require("../controllers/entry.controller.js");
  
    // Create a new entry
    app.post("/entries", entry.create);
  
    // Retrieve all entries
    app.get("/entries", entry.findAll);

    // Retrieve a all Entries with orderId
    app.get("/entries/:orderId", entry.findOne);
};