import { ValidationChain, validationResult } from "express-validator";
import { ApiError } from "./errors";
import { NextFunction, Request, Response } from "express";


export const validate = (schemas:ValidationChain[]) => {
  return async (req:Request, res:Response, next:NextFunction):Promise<void> => {
    await Promise.all(schemas.map((schema) => schema.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest("Validation error", errors.array()));
    }
    next();
  };
};


