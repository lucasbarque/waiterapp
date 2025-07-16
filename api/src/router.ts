import { Router } from "express";
import { listCategories } from "./app/use-cases/categories/list-categories";
import { createCategory } from "./app/use-cases/categories/create-category";
import { listProducts } from "./app/use-cases/products/list-products";

export const router = Router();

// List categories
router.get("/categories", listCategories);

// Create category
router.post("/categories", createCategory);

// List products
router.get("/products", listProducts);

// Create product
router.post("/products", (_request, response) => {
  response.send("ok");
});

// Get products by category
router.get("/categories/:categoryId/products", (_request, response) => {
  response.send("ok");
});

// List orders
router.get("/orders", (_request, response) => {
  response.send("ok");
});

// Create order
router.post("/orders", (_request, response) => {
  response.send("ok");
});

// Change order status
router.patch("/orders/:orderId", (_request, response) => {
  response.send("ok");
});

// Delete/cancel order
router.delete("/orders/:orderId", (_request, response) => {
  response.send("ok");
});
