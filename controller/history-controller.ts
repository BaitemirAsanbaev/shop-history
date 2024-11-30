import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { ApiError } from "../utils/errors";
import { historyService } from "../service/history-service";
import { historyDTO, IHistory } from "../model/history-model";


export const historyController = new  class HistoryController{
    async createHistory(req:Request, res:Response, next:NextFunction) {
        try {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return next(ApiError.BadRequest("Validation error", errors.array()));
          }
          const historyDto:historyDTO = req.body
          const history = await historyService.createHistory(historyDto);
          return res.status(201).json(history);
        } catch (e) {
          next(e);
        }
      }
      async getHistory(req:Request, res:Response, next:NextFunction) {
        try {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return next(ApiError.BadRequest("Validation error", errors.array()));
          }
          const historyDto:historyDTO = req.body
          const history:IHistory[] = await historyService.getHistory(historyDto);
          return res.status(200).json(history);
        } catch (e) {
          next(e);
        }
      }
      async getAllHistory(req:Request, res:Response, next:NextFunction) {
        try {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return next(ApiError.BadRequest("Validation error", errors.array()));
          }
          const history:IHistory[] = await historyService.getAllHistory();
          return res.status(200 ).json(history);
        } catch (e) {
          next(e);
        }
      }
      async deleteHistory(req:Request, res:Response, next:NextFunction) {
        try {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return next(ApiError.BadRequest("Validation error", errors.array()));
          }
          const id = Number(req.params.id)
          const history:IHistory[] = await historyService.deleteHistory(id);
          return res.status(201).json(history);
        } catch (e) {
          next(e);
        }
      }
}