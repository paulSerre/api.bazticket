const sql = require("./db.js");

// constructor
const Entry = function(entry) {
  this.orderId = entry.orderId;
  this.timestamp = entry.timestamp;
};

Entry.getAll = result => {
    sql.query("SELECT * FROM wp_woocommerce_entries", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Entries: ", res);
        result(null, res);
    });
};

Entry.create = (newEntry, result) => {
    sql.query("INSERT INTO wp_woocommerce_entries SET ?", newEntry, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created task: ", {"entryId":res.insertId, ...newEntry });
        result(null, { "entryId":res.insertId, ...newEntry });
    });
};

Entry.findByOrderId = (orderId, result) => {
    sql.query(`SELECT * FROM wp_woocommerce_entries WHERE orderId = ${orderId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found entries: ", res);
        result(null, res);
        return;
      }
  
      // not found Entry with the id
      result({ kind: "not_found" }, null);
    });
  };

Entry.findByEventId = (eventId, result) => {
  sql.query(`SELECT wp_wc_customer_lookup.first_name, wp_wc_customer_lookup.last_name, \
                    wp_wc_order_product_lookup.order_id, \
                    wp_woocommerce_entries.timestamp \
            FROM wp_wc_customer_lookup \
            JOIN wp_wc_order_product_lookup ON wp_wc_order_product_lookup.customer_id = wp_wc_customer_lookup.customer_id \
            JOIN wp_woocommerce_entries ON wp_wc_order_product_lookup.order_id = wp_woocommerce_entries.orderId \
            WHERE wp_wc_order_product_lookup.product_id = ${eventId}`,
      (err, res) => {
        if (err) {
          console.log(err);
          result(err, null);
          return;
        }
        if (res.length) {
          console.log("Found entries : ", res);
          result(null, res);
          return;
        }
        result({ kind: "not_found" }, null);
      });
}


module.exports = Entry;