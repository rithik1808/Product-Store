import express, { Router } from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.find({});
    res.status(200).json({ success: true, data: allProducts });
  } catch (error) {
    console.error("Error in getting all products", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  const product = req.body;
  console.log(product);
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .send({ success: false, message: "Please fill all the fields" });
  }
  const createdProduct = await Product.create(product);
  try {
    await createdProduct.save();
    res.status(201).send({ success: true, product: createdProduct });
  } catch (error) {
    console.error("Error is Create product", error.message);
    res.status(500).send({ success: false, message: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  const productId = req.params.id;
  try {
    await Product.findByIdAndDelete(productId);
    res.status(200).send({ success: true, message: "Product deleted" });
  } catch (error) {
    console.error("Product with ID:" + productId + " not found", error.message);
    res.status(404).send({ success: false, message: "Product not found" });
  }
});

router.put("/:id", async (req, res) => {
  const productId = req.params.id;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res
      .status(404)
      .send({ success: false, message: "Invalid Product ID" });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, product, {
      new: true,
    });
    res.status(200).send({ success: true, product: updatedProduct });
  } catch (error) {
    console.error("Error updating the product", error.message);
    res.status(500).send({ success: false, message: "Internal Server Error" });
  }
});

export default router;
