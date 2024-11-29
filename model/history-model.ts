import { UUID } from "crypto";
import { IAction } from "./action-model";

export interface IHistory {
  item_plu: UUID;
  shop_id: number;
  amount: number;
  action_name: string;
  action: IAction;
  date: string;
}
