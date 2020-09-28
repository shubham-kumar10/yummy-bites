import { FoodItem } from 'src/app/food/item-info/foodItem';

export interface Cart {
    cartItems: FoodItem[];
    total: number;
}
