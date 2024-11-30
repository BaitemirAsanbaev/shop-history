import express from "express";
import { historyController } from "../controller/history-controller";
import { validate } from "../utils/middleware";
import { body } from "express-validator";

export const HistoryRouter = express.Router();

/**
 * @swagger
 * /history/create:
 *   post:
 *     summary: Create a new history entry
 *     description: Create a new entry in the history table with inventory_id, amount, and action.
 *     tags:
 *       - History
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - inventory_id
 *               - amount
 *               - action
 *             properties:
 *               inventory_id:
 *                 type: string
 *               amount:
 *                 type: integer
 *               action:
 *                 type: string
 *     responses:
 *       201:
 *         description: History entry created successfully
 *       400:
 *         description: Validation error
 */
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
];

HistoryRouter.post("/create", validate(validateCreateHistory), historyController.createHistory as any);

/**
 * @swagger
 * /history/:
 *   get:
 *     summary: Get history entries by filter
 *     description: Retrieve history entries filtered by inventory_id, amount, action, and date range.
 *     tags:
 *       - History
 *     responses:
 *       200:
 *         description: List of history entries
 *       400:
 *         description: Validation error
 */
HistoryRouter.get("/", historyController.getHistory as any);

/**
 * @swagger
 * /history/all:
 *   get:
 *     summary: Get all history entries
 *     description: Retrieve all history entries.
 *     tags:
 *       - History
 *     responses:
 *       200:
 *         description: List of all history entries
 *       400:
 *         description: Validation error
 */
HistoryRouter.get("/all", historyController.getAllHistory as any);

/**
 * @swagger
 * /history/delete/{id}:
 *   delete:
 *     summary: Delete a history entry by ID
 *     description: Delete a history entry from the database using its ID.
 *     tags:
 *       - History
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the history entry to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: History entry deleted successfully
 *       404:
 *         description: History entry not found
 */
HistoryRouter.delete("/delete/:id", historyController.deleteHistory as any);

