const router = require("express").Router();
const { verify } = require("jsonwebtoken");
const Product = require("../models/Product");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

// CREATE 
router.post("/", verifyTokenAndAdmin, async (req,res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});
// UPDATE Product

// DELETE


module.exports = router;
