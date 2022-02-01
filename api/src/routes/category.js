const { Router } = require("express");
const router = Router();
const { Category } = require("../db");
router.get("/category", async (req, res) => {
  let category = await Category.findAll();
  res.json(category);
});

router.get("/categoryName", async (req, res) => {
    let category = await Category.findAll({
        where: {cat_id: req.query.id}
    });
    res.json(category);
  });
module.exports = router;
