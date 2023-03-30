const db = require("../models");
const { activity } = db;

// const { joborder, employee_listing, customer_erp, work_activities_erp, user } =
// db;

exports.create = async (req, res) => {
  try {
    //deconstructing
    const { studentName, studentSection, grade } = req.body;

    const data = await activity.create({
      studentName,
      studentSection,
      grade,
    });

    return res.status(200).send({
      message: "Activity successfully created",
      data,
    });
  } catch (err) {
    console.log("Error: ", err);
    return res.status(400).send({
      message: `Cannot create Activity, ${err}`,
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await activity.findAll({});
    return res.status(200).send({
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { studentName, studentSection, grade } = req.body;

    const data = await activity.update(
      {
        studentName,
        studentSection,
        grade,
      },
      {
        where: { id },
      }
    );

    return res.status(200).send({
      message: "Job order successfully updated",
      data,
    });
  } catch (err) {
    return res.status(400).send({
      message: "Error: cannot update job order",
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    await activity.destroy({
      where: { id },
    });
    return res.status(200).send({
      message: "Job order successfully deleted",
    });
  } catch (err) {
    return res.status(400).send({
      message: "Error: cannot delete Job Order",
    });
  }
};
