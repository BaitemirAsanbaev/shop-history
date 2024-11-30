import express from "express";
import { actionsController } from "../controller/actions-controller";
import { validate } from "../utils/middleware";
import { body } from "express-validator";

export const ActionsRouter = express.Router();

const validateCreateActions = [
    body("name")
    .notEmpty()
    .withMessage("name is required"),
    
]

ActionsRouter.post("/create", validate(validateCreateActions), actionsController.createActions as any);
ActionsRouter.get("/all", actionsController.getAllActions as any);
ActionsRouter.delete("/delete/:id", actionsController.deleteActions as any);

