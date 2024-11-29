import { UUID } from "crypto";
import { IItem } from "./item-model";
import { Ishop } from "./shop";

export interface IInventory {
  item_plu: UUID;
  item: IItem;
  shop: Ishop;
  shop_id: number;
  ordered_amount: number;
  available_amount: number;
}
