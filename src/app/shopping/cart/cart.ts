import { foodItem } from "src/app/food/item-info/foodItem";
export interface Cart {
    foodItemList: foodItem[],
    total: number;
}
