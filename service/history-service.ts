import { historyDTO, IHistory } from "../model/history-model";
import { historyRepo } from "../repository/history-repostory";

export const historyService = new class HistoryService{
    async createHistory(history:historyDTO){
        try{
            const newHistory = await historyRepo.createHistory(history)
            return newHistory.rows[0];
        }
        catch(e){
            throw e
        }
        
    }
    async getHistory(history:historyDTO):Promise<IHistory[]>{
        try{
            const newHistory = await historyRepo.getHistory(history)
            return newHistory.rows;
        }
        catch(e){
            throw e
        }
        
    }
    async getAllHistory():Promise<IHistory[]>{
        try{
            const newHistory = await historyRepo.getAllHistory()
            return newHistory.rows;
        }
        catch(e){
            throw e
        }
        
    }
    async deleteHistory(id:number):Promise<IHistory[]>{
        try{
            const newHistory = await historyRepo.deleteHistory(id)
            return newHistory.rows[0];
        }
        catch(e){
            throw e
        }
        
    }
}