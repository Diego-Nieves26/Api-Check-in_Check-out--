const { db, DataTypes } = require("../utils/database.util");

const Registration = db.define(
  "registration",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    entranceTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    exitTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "working",
    },
  },
  { timestamps: false }
);

module.exports = { Registration };
