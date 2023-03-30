module.exports = {
  HOST: "localhost",
  PORT: "",
  USER: "sa",
  PASSWORD: "zankpos45@2023",
  DB: "react_practice_db",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
