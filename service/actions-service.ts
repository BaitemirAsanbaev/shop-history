import { IAction } from "../model/actions-model";
import { actionsRepo } from "../repository/actions-repository";

export const actionsService = new class ActionsService{
    async createActions(actions:IAction){
        try{
            const newActions = await actionsRepo.createActions(actions)
            return newActions.rows[0];
        }
        catch(e){
            throw e
        }
        
    }
    async getAllActions():Promise<IAction[]>{
        try{
            const newActions = await actionsRepo.getAllActions()
            return newActions.rows;
        }
        catch(e){
            throw e
        }
        
    }
    async deleteActions(id:number):Promise<IAction[]>{
        try{
            const newActions = await actionsRepo.deleteActions(id)
            return newActions.rows[0];
        }
        catch(e){
            throw e
        }
        
    }
}