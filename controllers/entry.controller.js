const Entry = require("../models/entry.model.js");

exports.findAll = (_, res) => {
    Entry.getAll((err, data) => {
      if (err)
          res.status(500).send({
              message:
                  err.message || "Some error occurred while retrieving entry."
              });
      else res.send(data);
  });
};


exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    // Create a Entry
    const entry = new Entry({
        orderId: req.body.orderId,
        timestamp: req.body.timestamp
    });
  
    // Save Task in the database
    Entry.create(entry, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Entry."
            });
        else 
            res.send(data);
    });
};


exports.findOne = (req, res) => {
    Entry.findByOrderId(req.params.orderId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Entry with orderId ${req.params.orderId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Entry with orderId " + req.params.orderId
          });
        }
      } else res.send(data);
    });
  };

exports.findByEventId = (req, res) => {
  console.log("ok");
  Entry.findByEventId(req.params.eventId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Entries with eventId ${req.params.eventId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving entries with eventId "+req.params.orderId
        });
      }
    } else res.send(data);
  }) 
};