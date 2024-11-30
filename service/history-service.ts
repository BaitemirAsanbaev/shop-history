import { historyDTO, IHistory } from "../model/history-model";
import { historyRepo } from "../repository/history-repostory";
import { logger } from "../utils/logger";

export const historyService = new class HistoryService {
    
  async createHistory(history: historyDTO) {
    try {
      logger.info(`Creating history entry for inventory_id: ${history.inventory_id} with action: ${history.action}`);

      const newHistory = await historyRepo.createHistory(history);
      logger.info(`History entry created successfully: ${JSON.stringify(newHistory.rows[0])}`);
      return newHistory.rows[0];
    } catch (e) {
      logger.error(`Error creating history for inventory_id: ${history.inventory_id} - ${e}`);
      throw e;
    }
  }

  async getHistory(history: historyDTO): Promise<IHistory[]> {
    try {
      logger.info(`Fetching history with filters: ${JSON.stringify(history)}`);

      if(history.item_plu || history.shop_id){
        
      }
      const historyEntries = await historyRepo.getHistory(history);
      logger.info(`Fetched ${historyEntries.length} history entries`);
      return historyEntries;
    } catch (e) {
      logger.error(`Error fetching history: ${e}`);
      throw e;
    }
  }

  async getAllHistory(): Promise<IHistory[]> {
    try {
      logger.info("Fetching all history entries");
      const historyEntries = await historyRepo.getAllHistory();
      logger.info(`Fetched ${historyEntries.rows.length} total history entries`);
      return historyEntries.rows;
    } catch (e) {
      logger.error(`Error fetching all history: ${e}`);
      throw e;
    }
  }

  async deleteHistory(id: number): Promise<IHistory[]> {
    try {
      logger.info(`Deleting history entry with ID: ${id}`);
      const deletedHistory = await historyRepo.deleteHistory(id);
      logger.info(`History entry deleted successfully: ${JSON.stringify(deletedHistory.rows[0])}`);
      return deletedHistory.rows[0];
    } catch (e) {
      logger.error(`Error deleting history entry with ID: ${id} - ${e}`);
      throw e;
    }
  }
}
