import { pool } from "../db/db";
import { IAction } from "../model/actions-model";

export const actionsRepo = new class ActionsRepo {
  async createActions(actions: IAction) {
    try {
      return await pool.query(
        "INSERT INTO actions (name) VALUES ($1) RETURNING *",
        [actions.name]
      );
    } catch (e) {
      throw e;
    }
  }
  async getAllActions() {
    try {
      return await pool.query("SELECT * FROM actions");
    } catch (e) {
      throw e;
    }
  }
  async deleteActions(id: number) {
    try {
      return await pool.query('DELETE FROM actions WHERE "id"=$1 RETURNING *', [id]);
    } catch (e) {
      throw e;
    }
  }
};
