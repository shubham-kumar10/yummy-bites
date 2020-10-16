import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItemService } from '../../services/menu-item.service';
import { FoodItem } from '../item-info/foodItem';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css'],
})
export class ItemEditComponent implements OnInit {
  categories = ['Starter', 'Main Course', 'Dessert', 'Drinks'];
  itemForm: FormGroup;
  foodItem: FoodItem;
  saved = false;
  editdone = false;
  itemExists = false;
  constructor(
    private formBuild: FormBuilder,
    private _menuItem: MenuItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.generateForm();
    const foodItemId = this.getFoodId();
    if (foodItemId) {
      this.itemExists = true;
      this.subscribeMenuItems(foodItemId);
    }
  }

  get itemName() {
    return this.itemForm.get('itemName');
  }

  get itemURL() {
    return this.itemForm.get('itemURL');
  }

  get price() {
    return this.itemForm.get('price');
  }

  get dateOfLaunch() {
    return this.itemForm.get('dateOfLaunch');
  }

  get category() {
    return this.itemForm.get('category');
  }

  get active() {
    return this.itemForm.get('active');
  }

  subscribeMenuItems(foodItemId: number): void {
    this._menuItem.getMenuItem(foodItemId).subscribe((data) => {
      data.dateOfLaunch = new Date(data.dateOfLaunch);
      this.foodItem = data;
      console.log(this.foodItem);
      this.foodItem.dateOfLaunch.setDate(this.foodItem.dateOfLaunch.getDate());
      this.patchFormData();
    });
  }

  get freeDelivery() {
    return this.itemForm.get('freeDelivery');
  }

  getFoodId(): number {
    let foodItemId: number;
    this.route.queryParams.subscribe((param) => {
      foodItemId = +param['id'] || 0;
    });
    return foodItemId;
  }

  generateForm(): void {
    this.itemForm = this.formBuild.group({
      itemName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]],
      itemURL: ['', Validators.required],
      price: ['', Validators.required],
      dateOfLaunch: ['', Validators.required],
      category: ['', Validators.required],
      active: ['', Validators.required],
      freeDelivery: '',
    });
  }

  patchFormData(): void {
    this.itemForm.patchValue({
      itemName: this.foodItem.title,
      itemURL: this.foodItem.imageUrl,
      price: this.foodItem.price,
      dateOfLaunch: this.foodItem.dateOfLaunch.toISOString().substring(0, 10),
      category: this.foodItem.category,
      active: this.foodItem.active,
      freeDelivery: this.foodItem.freeDelivery,
    });
  }

  onSubmit() {
    const id: number = this.itemExists && this.foodItem ? this.foodItem.id : undefined;
    const newItem: FoodItem = {
      id: id,
      title: this.itemForm.value['itemName'],
      price: +this.itemForm.value['price'],
      active: this.itemForm.value['active'],
      dateOfLaunch: new Date(this.itemForm.value['dateOfLaunch']),
      category: this.itemForm.value['category'],
      freeDelivery: this.itemForm.value['freeDelivery'],
      imageUrl: this.itemForm.value['itemURL'],
    };
    if (newItem.id) {
      this._menuItem.save(newItem).subscribe();
      this.editdone = true;
      console.log(newItem);
    } else {
      this._menuItem.addMenuItem(newItem).subscribe();
    }

  }

  /*
    Snippet for fake backend(food.service.ts):
    onSaveClicked() {
      this.foodservice.updateFoodItem(newItem);
      this._menuItem.save(newItem);
      this.router.navigate(['search-bar'])
    }
  */
}
