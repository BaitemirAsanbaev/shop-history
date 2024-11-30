import express from "express";
import { actionsController } from "../controller/actions-controller";
import { validate } from "../utils/middleware";
import { body } from "express-validator";

export const ActionsRouter = express.Router();

/**
 * @swagger
 * /actions/create:
 *   post:
 *     summary: Create a new action
 *     description: Create a new action with a name.
 *     tags:
 *       - Actions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the action
 *     responses:
 *       201:
 *         description: Action created successfully
 *       400:
 *         description: Validation error
 */
const validateCreateActions = [
  body("name")
    .notEmpty()
    .withMessage("name is required"),
];

ActionsRouter.post("/create", validate(validateCreateActions), actionsController.createActions as any);

/**
 * @swagger
 * /actions/all:
 *   get:
 *     summary: Get all actions
 *     description: Retrieve a list of all actions.
 *     tags:
 *       - Actions
 *     responses:
 *       200:
 *         description: List of actions
 *       400:
 *         description: Validation error
 */
ActionsRouter.get("/all", actionsController.getAllActions as any);

/**
 * @swagger
 * /actions/delete/{id}:
 *   delete:
 *     summary: Delete an action
 *     description: Delete an action by its ID.
 *     tags:
 *       - Actions
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the action to be deleted
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Action deleted successfully
 *       400:
 *         description: Validation error
 */
ActionsRouter.delete("/delete/:id", actionsController.deleteActions as any);
