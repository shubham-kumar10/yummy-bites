import { FoodItem } from './foodItem.model';

export interface Cart {
    cartItems: FoodItem[];
    total: number;
}
