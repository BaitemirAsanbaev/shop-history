import { IAction } from "../model/actions-model";
import { actionsRepo } from "../repository/actions-repository";
import { logger } from "../utils/logger";

export const actionsService = new class ActionsService {
    
  async createActions(actions: IAction) {
    try {
      logger.info(`Creating new action with name: ${actions.name}`);
      const newActions = await actionsRepo.createActions(actions);
      logger.info(`Action created successfully: ${JSON.stringify(newActions.rows[0])}`);
      return newActions.rows[0];
    } catch (e) {
      logger.error(`Error creating action with name: ${actions.name} - ${e}`);
      throw e;
    }
  }

  async getAllActions(): Promise<IAction[]> {
    try {
      logger.info("Fetching all actions");
      const actions = await actionsRepo.getAllActions();
      logger.info(`Fetched ${actions.rows.length} actions`);
      return actions.rows;
    } catch (e) {
      logger.error(`Error fetching all actions: ${e}`);
      throw e;
    }
  }

  async deleteActions(id: number): Promise<IAction[]> {
    try {
      logger.info(`Deleting action with ID: ${id}`);
      const deletedAction = await actionsRepo.deleteActions(id);
      logger.info(`Action deleted successfully: ${JSON.stringify(deletedAction.rows[0])}`);
      return deletedAction.rows[0];
    } catch (e) {
      logger.error(`Error deleting action with ID: ${id} - ${e}`);
      throw e;
    }
  }
}
