import { UUID } from "crypto";
import { IAction } from "./action-model";

export interface IHistory {
  id:number
  item_plu: UUID;
  shop_id: number;
  amount: number;
  action: string;
  date: string;
}
export interface historyDTO extends Partial<IHistory>{
  Action: IAction|null;
  from:string|null;
  to:string|null
}