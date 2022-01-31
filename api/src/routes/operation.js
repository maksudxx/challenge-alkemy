const { Router } = require("express");
const router = Router();
const { Op } = require("sequelize");
const { Operation } = require("../db.js");
const { v4: uuidv4 } = require("uuid");
router.get("/operations", async (req, res, next) => {
  const { type } = req.query;
  try {
    if (!type) {
      let operations = await Operation.findAll();
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
  console.log(entry);
  try {
    await entry.map((e) => {
      let newOperation = Operation.create({
        op_concept: e.concept,
        op_amount: e.amount,
        op_type: e.type
      });
      res.json(newOperation);
    });
    // op_concept: concept,
    // op_amount: amount,
    // op_type: type

    
  } catch (err) {
    next(err);
  }
});

module.exports = router;
