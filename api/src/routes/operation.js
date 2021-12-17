const { Router } = require("express");
const router = Router();
const{Op} = require("sequelize")
const { Operation } = require("../db.js");


router.get("/", async (req, res, next) => {
  const{tipe} = req.query
  try {
    if(!tipe){
        let operations = await Operation.findAll();
        res.json(operations);
    }else{
        searchOperation = await Operation.findAll({
            where: {op_tipe: {[Op.iLike]: `${tipe}%`}}
        })
        if(searchOperation === 0){
            res.json({message: "the operation not exists"})
        }else{
            res.json(searchOperation)
        }
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const {op_concept, op_amount, op_tipe} = req.body;
  try {
    console.log(op_concept, op_amount, op_tipe);
    let newOperation = await Operation.create({
      op_concept,
      op_amount,
      op_tipe
    });

    res.json(newOperation);
  } catch (err) {
    next(err);
  }
});

module.exports = router;