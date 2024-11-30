import express from "express";
import { historyController } from "../controller/history-controller";
import { validate } from "../utils/middleware";
import { body } from "express-validator";

export const HistoryRouter = express.Router();

const validateCreateHistory = [
    body("inventory_id")
    .notEmpty()
    .withMessage("Name is required"),
    body("amount")
    .notEmpty()
    .withMessage("Name is required"),
    body("action")
    .notEmpty()
    .withMessage("Name is required"),
    
]

HistoryRouter.post("/create", validate(validateCreateHistory), historyController.createHistory as any);

