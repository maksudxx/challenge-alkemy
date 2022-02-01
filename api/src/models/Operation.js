const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
 
  sequelize.define('operation', {
    op_id:{
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    op_concept: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    op_amount: {
        type: DataTypes.DECIMAL,
        AllowNull: false,
    },
  });
};