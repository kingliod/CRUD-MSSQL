const db = require("../models");
const { joborder } = db;

// const { joborder, employee_listing, customer_erp, work_activities_erp, user } =
// db;

exports.create = async (req, res) => {
  try {
    const {
      joborder_id,
      user_id,
      employee_id,
      customer_id,
      date,
      contactPerson,
      transportForMoney,
      remarks,
      deliveryRemarks,
      status,
      permitIssue,
    } = req.body;

    const data = await joborder.create({
      joborder_id,
      user_id,
      employee_id,
      customer_id,
      date,
      contactPerson,
      transportForMoney,
      remarks,
      deliveryRemarks,
      status,
      permitIssue,
    });

    return res.status(200).send({
      message: "Job order successfully created",
      data,
    });
  } catch (err) {
    console.log("Error: ", err);
    return res.status(400).send({
      message: `Cannot create Job Order, ${err}`,
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await joborder.findAll({
      include: [
        {
          model: employee_listing,
        },
        {
          model: customer_erp,
        },
        {
          model: work_activities_erp,
        },
      ],
    });
    return res.status(200).send({
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
};
