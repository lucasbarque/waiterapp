import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function createProduct(request: Request, response: Response) {
  try {
    const { icon, name } = request.body;

    const category = await Product.create({ icon, name });

    return response.status(201).json(category);
  } catch (error) {
    console.log(error);
    response.status(500).json({
      error: "Internal server error",
    });
  }
}
