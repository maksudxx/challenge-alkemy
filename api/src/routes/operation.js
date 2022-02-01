const { Router } = require("express");
const router = Router();
const { Op } = require("sequelize");
const { Operation, Category } = require("../db.js");
const { v4: uuidv4 } = require("uuid");
router.get("/operations", async (req, res, next) => {
  const { type } = req.query;
  try {
    if (!type) {
      let operations = await Operation.findAll({
        include: {model: Category}
      });
      res.json(operations);
    } else {
      searchOperation = await Operation.findAll({
        where: { op_type: { [Op.iLike]: `${type}%` } },
      });
      if (searchOperation === 0) {
        res.json({ message: "the operation not exists" });
      } else {
        res.json(searchOperation);
      }
    }
  } catch (err) {
    next(err);
  }
});

router.post("/operations", async (req, res, next) => {
  const { entry } = req.body;
  let newOperation;
  try {
     entry.map(async (e) => {
       newOperation = await Operation.create({
        op_id: uuidv4(),
        op_concept: e.concept,
        op_amount: e.amount,
      });
      await newOperation.setCategory(e.type);
    });
    res.json(newOperation);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
