import { pool } from "../db/db";
import { historyDTO, IHistory } from "../model/history-model";

export const historyRepo = new (class HistoryRepo {
  async createHistory(history: historyDTO) {
    try {
      return await pool.query(
        "INSERT INTO history (item_plu, shop_id, amount, action, data) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [
          history.item_plu,
          history.shop_id,
          history.amount,
          history.action,
          history.date,
        ]
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
  async getHistory(dto:historyDTO) {
    try {
      return await pool.query(
        `SELECT * FROM history WHERE
          (item_plu = COALESCE($1, item_plu)) AND
          (shop_id = COALESCE($2, shop_id)) AND
          (amount = COALESCE($3, amount)) AND
          (action = COALESCE($4, action)) AND
          (date >= COALESCE($5, date)) AND
          (date <= COALESCE($6, date))`,
          [dto.item_plu, dto.shop_id, dto.amount, dto.action, dto.from, dto.to]
      );
    } catch (e) {
      throw e;
    }
  }
  async getHistoryByItemPlu(history: IHistory) {
    try {
      return await pool.query('SELECT * FROM history WHERE "item_plu=$1"', [
        history.item_plu,
      ]);
    } catch (e) {
      throw e;
    }
  }
  async getHistoryByShopId(history: IHistory) {
    try {
      return await pool.query('SELECT * FROM history WHERE "shop_id=$1"', [
        history.shop_id,
      ]);
    } catch (e) {
      throw e;
    }
  }
  async getHistoryByAction(history: IHistory) {
    try {
      return await pool.query('SELECT * FROM history WHERE "action=$1"', [
        history.action,
      ]);
    } catch (e) {
      throw e;
    }
  }
  async getHistoryByDate(history: IHistory) {
    try {
      return await pool.query('SELECT * FROM history WHERE "date=$1"', [
        history.date,
      ]);
    } catch (e) {
      throw e;
    }
  }
  async deleteHistory(id: number) {
    try {
      return await pool.query('DELETE FROM history WHERE "id=$1"', [id]);
    } catch (e) {
      throw e;
    }
  }
})();
