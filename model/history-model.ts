import { UUID } from "crypto";
import { IAction } from "./action-model";

export interface IHistory {
  item_plu: UUID;
  shop_id: number;
  amount: number;
  action: string;
  date: string;
}
export interface historyDTO extends IHistory{
  Action: IAction;
  from:string;
  to:string
}