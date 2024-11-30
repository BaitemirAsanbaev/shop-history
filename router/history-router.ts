import express from "express";
import { historyController } from "../controller/history-controller";
import { validate } from "../utils/middleware";
import { body } from "express-validator";

export const HistoryRouter = express.Router();

const validateCreateHistory = [
    body("inventory_id")
    .notEmpty()
    .withMessage("inventory_id is required"),
    body("amount")
    .notEmpty()
    .withMessage("amount is required"),
    body("action")
    .notEmpty()
    .withMessage("action is required"),
    
]

HistoryRouter.post("/create", validate(validateCreateHistory), historyController.createHistory as any);
HistoryRouter.get("/", historyController.getHistory as any);
HistoryRouter.get("/all", historyController.getAllHistory as any);
HistoryRouter.delete("/delete/:id", historyController.deleteHistory as any);

