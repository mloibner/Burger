const express = require("express");

const router = express.Router();

const burger = require ("../models/burger_model.js");

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (result) => {
        res.json({ id: result.insertID});
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne(
      {
        devoured: req.body.devour,
        burger_name: req.body.burger_name
      },
      condition,
      (result) => {
         
        res.status(200).end();
  
      }
    );
  });
  
  module.exports = router;