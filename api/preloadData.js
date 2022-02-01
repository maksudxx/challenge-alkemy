const {v4: uuidv4} = require('uuid');

async function createData(){

    const category =[
        {cat_id: uuidv4(), cat_description: "Entry"},
        {cat_id: uuidv4(), cat_description: "Expenses"}
    ]
    return {category}
}

module.exports = {createData};