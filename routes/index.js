const express = require("express");
const db = require("../models");
const routes = express.Router();

//routs

routes.get("/home", function(req, res) {
  db.Tasks.findAll({
    attributes: ["id", "todo"]
  }).then(function(results) {
    // console.log(results);
    res.render("main.ejs", { list: results });
  });
});

routes.post("/ninja", function(req, res) {
  console.log(req.body.taskItem);
  db.Tasks.create({
    todo: req.body.taskItem
  }).then(function(results) {
    res.redirect("/home");
  });
});

routes.delete("/delete/:index", function(req, res) {
  console.log("here");
  console.log(req.params.index);
  db.Tasks.destroy({
    where: { id: req.params.index }
  }).then(function(results) {
    res.redirect("/home");
  });
  res.json(list);
});

module.exports = routes;
