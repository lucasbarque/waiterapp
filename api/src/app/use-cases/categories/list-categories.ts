import { Request, Response } from "express";

export function listCategories(_request: Request, response: Response) {
  return response.send("ok");
}
