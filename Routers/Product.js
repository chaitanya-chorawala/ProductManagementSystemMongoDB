require("dotenv").config();
const express = require("express");
const router = express.Router();
router.use(express.json());

const mongoose = require("mongoose");
mongoose.connect(process.env.MONOGURL).then(()=>console.log("Mongo connected!"));

const ProductModel = require("../Models/Product");

router.get("/", (req, res) => res.send("Product router"));

//Add product
router.post("/Add", (req, res) => {
    const { product } = req.body;
    ProductModel.create(product);

    return res.json({data : "Product Added!"});
});

module.exports = router;