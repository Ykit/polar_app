const Sequelize = require("sequelize");
const { sequelize } = require("./db");

const Receipt = sequelize.define("receipt", {
  location: {
    type: Sequelize.STRING
  },
  datetimePurchase: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW()
  }
});

module.exports = Receipt;
