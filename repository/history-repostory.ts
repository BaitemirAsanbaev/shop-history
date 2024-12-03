import { UUID } from "crypto";
import { pool } from "../db/db";
import { historyDTO, IHistory } from "../model/history-model";
import { logger } from "../utils/logger";

export const historyRepo = new class HistoryRepo {
  async createHistory(history: historyDTO) {
    try {
      return await pool.query(
        "INSERT INTO history (inventory_id, amount, action) VALUES ($1, $2, $3) RETURNING *",
        [history.inventory_id, history.amount, history.action]
      );
    } catch (e) {
      throw e;
    }
  }
  async getAllHistory() {
    try {
      return await pool.query("SELECT * FROM history");
    } catch (e) {
      throw e;
    }
  }
  async getHistory(dto: historyDTO): Promise<IHistory[]> {
    try {
      const { item_plu, shop_id, amount, action, from, to } = dto;
      let inventoryIds: number[] = [];
      logger.info(`DATA ${item_plu} - ${shop_id}`)
      // Step 1: Fetch inventories based on item_plu or shop_id
      if (item_plu || shop_id) {
        let inventoryQuery = `SELECT id FROM inventory WHERE 1=1`; // Base query
        const inventoryParams: any[] = [];
        let paramIndex = 1;
  
        if (item_plu) {
          inventoryQuery += ` AND item_plu = $${paramIndex++}`;
          inventoryParams.push(item_plu);
        }
        if (shop_id) {
          inventoryQuery += ` AND shop_id = $${paramIndex++}`;
          inventoryParams.push(shop_id);
        }
  
        const inventoriesResult = await pool.query(inventoryQuery, inventoryParams);
        inventoryIds = inventoriesResult.rows.map((row: { id: number }) => row.id);
      }

  
      // Step 2: Fetch histories for the inventory IDs
      let historyQuery = `SELECT * FROM history WHERE 1=1`; // Base query for histories
      const historyParams: any[] = [];
      let historyParamIndex = 1;
  
      if (inventoryIds.length > 0) {
        historyQuery += ` AND inventory_id = ANY($${historyParamIndex++})`;
        historyParams.push(inventoryIds);
      }
      if (amount !== undefined) {
        historyQuery += ` AND amount = $${historyParamIndex++}`;
        historyParams.push(amount);
      }
      if (action !== undefined) {
        historyQuery += ` AND action = $${historyParamIndex++}`;
        historyParams.push(action);
      }
      if (from !== undefined) {
        historyQuery += ` AND date >= $${historyParamIndex++}`;
        historyParams.push(from);
      }
      if (to !== undefined) {
        historyQuery += ` AND date <= $${historyParamIndex++}`;
        historyParams.push(to);
      }
  
      const historyResult = await pool.query(historyQuery, historyParams);
      return historyResult.rows;
    } catch (e) {
      logger.error(`Error fetching history: ${e}`);
      throw e;
    }
  }
  

  async deleteHistory(id: number) {
    try {
      return await pool.query('DELETE FROM history WHERE "id"=$1', [id]);
    } catch (e) {
      throw e;
    }
  }
};
