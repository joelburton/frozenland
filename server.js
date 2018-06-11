const express = require("express");
const bodyparser = require("body-parser");
const cors = require('cors');

const server = express();

server.use(bodyparser.json());
server.use(cors());

server.get("/flavors", function (req, res) {
  res.json(
    {
      flavors: [
        { name: "hazelnut", price: 2.65, color: "red" },
        { name: "pistachio", price: 2.99, color: "green" },
        { name: "walnut", price: 4.25, color: "brown" },
      ]
    }
  )
});

server.post("/order", function (req, res) {
  const flavor = req.body.flavor;
  console.log("order for", flavor);
  if (Math.random() < .25) {
    res.json({ "result": "unavailable" });
  } else {
    res.json({ "result": "ordered" });
  }
});

server.listen(5000);
