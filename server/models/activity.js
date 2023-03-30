module.exports = (sequelize, Sequelize) => {
  const activity = sequelize.define("activity", {
    studentName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    studentSection: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    grade: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true,
    },
  });

  return activity;
};
