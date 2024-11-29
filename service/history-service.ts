import { historyDTO, IHistory } from "../model/history-model";
import { historyRepo } from "../repository/history-repostory";

export class HistoryService{
    async createHistory(history:historyDTO):Promise<IHistory>{
        try{
            const newHistory = await historyRepo.createHistory(history)
            return newHistory.rows[0];
        }
        catch(e){
            throw e
        }
        
    }
}