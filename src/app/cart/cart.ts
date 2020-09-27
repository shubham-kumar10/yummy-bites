import { FoodItem } from 'src/app/food/item-info/foodItem';

export interface Cart {
    foodItemList: FoodItem[];
    total: number;
}
