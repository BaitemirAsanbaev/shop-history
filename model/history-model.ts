import { UUID } from "crypto";
import { IAction } from "./actions-model";

export interface IHistory {
  id: number;
  inventory_id: number;
  amount: number;
  action: string;
  date: string;
}
export interface historyDTO extends Partial<IHistory> {
  Action: IAction | null;
  item_plu: UUID | null;
  shop_id: number | null;
  from: string | null;
  to: string | null;
}
