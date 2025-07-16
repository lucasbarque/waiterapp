import { Router } from "express";

export const router = Router();

// List categories
router.get("/categories", (_request, response) => {
  response.send("ok");
});

// Create category
router.post("/categories", (_request, response) => {
  response.send("ok");
});

// List products
router.get("/products", (_request, response) => {
  response.send("ok");
});

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
