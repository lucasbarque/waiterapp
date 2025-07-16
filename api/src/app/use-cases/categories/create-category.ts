import { Request, Response } from "express";

export function createCategory(_request: Request, response: Response) {
  return response.send("ok");
}
