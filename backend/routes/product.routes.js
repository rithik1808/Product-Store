import express from "express";
import {
  createdProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createdProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

export default router;
