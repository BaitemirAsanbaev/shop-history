import { pool } from "../db/db";
import { historyDTO, IHistory } from "../model/history-model";

export const historyRepo = new class HistoryRepo {
  async createHistory(history: historyDTO) {
    try {
      return await pool.query(
        "INSERT INTO history (inventory_id, amount, action, data) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [history.inventory_id, history.amount, history.action, history.date]
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
  async getHistory(dto: historyDTO) {
    try {
      return await pool.query(
        `SELECT * FROM history WHERE
          (inventory_id = COALESCE($1, item_plu)) AND
          (amount = COALESCE($2, amount)) AND
          (action = COALESCE($3, action)) AND
          (date >= COALESCE($4, date)) AND
          (date <= COALESCE($5, date))`,
        [dto.inventory_id, dto.amount, dto.action, dto.from, dto.to]
      );
    } catch (e) {
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
