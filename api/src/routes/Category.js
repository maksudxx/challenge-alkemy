const {DataTypes} =require('sequelize')
module.exports = (sequelize) =>{
    sequelize.define('category', {
        cat_id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        cat_description:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}