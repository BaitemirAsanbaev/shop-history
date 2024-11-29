import { pool } from "../db/db";
import { IHistory } from "../model/history-model";

export class HisteryRepo {
  async createHistory(history: IHistory) {
    try {
      return await pool.query(
        "INSERT INTO history (item_plu, shop_id, action, data) VALUES ($1, $2, $3, $4) RETURNING *",
        [history.item_plu, history.shop_id, history.action_name, history.date]
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
        history.action_name,
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
  async DeleteHistory(id:number) {
    try {
      return await pool.query('DELETE FROM history WHERE "id=$1"', [
        id
      ]);
    } catch (e) {
      throw e;
    }
  }

}
