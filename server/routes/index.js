module.exports = (app) => {
  var router = require("express").Router();

  const activity = require("../controllers/Activity");

  //JOB ORDER
  router.post("/create_activity", activity.create); //CREATE
  router.get("/view_activity", activity.findAll); //READ
  router.put("/update_activity/:id", activity.update); //UPDATE
  router.delete("/delete_activity/:id", activity.delete); //DELETE
  app.use("/api", router);
};
