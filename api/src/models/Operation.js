const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
 
  sequelize.define('operation', {
    op_concept: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    op_amount: {
        type: DataTypes.DECIMAL,
        AllowNull: false,
    },
    op_tipe: {
        type: DataTypes.STRING,
        AllowNull: false,
    }
  });
};