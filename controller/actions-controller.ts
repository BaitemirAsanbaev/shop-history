import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { ApiError } from "../utils/errors";
import { actionsService } from "../service/actions-service";
import { IAction } from "../model/actions-model";


export const actionsController = new  class ActionsController{
    async createActions(req:Request, res:Response, next:NextFunction) {
        try {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return next(ApiError.BadRequest("Validation error", errors.array()));
          }
          const actionsDto:IAction = req.body
          const actions = await actionsService.createActions(actionsDto);
          return res.status(201).json(actions);
        } catch (e) {
          next(e);
        }
      }
      async getAllActions(req:Request, res:Response, next:NextFunction) {
        try {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return next(ApiError.BadRequest("Validation error", errors.array()));
          }
          const actions:IAction[] = await actionsService.getAllActions();
          return res.status(200 ).json(actions);
        } catch (e) {
          next(e);
        }
      }
      async deleteActions(req:Request, res:Response, next:NextFunction) {
        try {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return next(ApiError.BadRequest("Validation error", errors.array()));
          }
          const id = Number(req.params.id)
          const actions:IAction[] = await actionsService.deleteActions(id);
          return res.status(201).json(actions);
        } catch (e) {
          next(e);
        }
      }
}