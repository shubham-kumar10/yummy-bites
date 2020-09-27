import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItemService } from '../../services/menu-item.service';
import { FoodItem } from '../item-info/foodItem';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  categories = ['Starter', 'Main Course', 'Dessert', 'Drinks'];
  itemForm: FormGroup;
  foodItem: FoodItem;
  saved = false;
  editdone = false;
  constructor(
    private formBuild: FormBuilder,
    private _menuItem: MenuItemService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const foodItemId = this.route.snapshot.paramMap.get('id');
    this._menuItem.getMenuItem(+foodItemId).subscribe(data => {
      data.dateOfLaunch = new Date(data.dateOfLaunch);
      this.foodItem = data;
      console.log(this.foodItem);
      this.foodItem.dateOfLaunch.setDate(this.foodItem.dateOfLaunch.getDate());
      this.itemForm = this.formBuild.group({
        itemName: [this.foodItem.title, [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ]],
        itemURL: [this.foodItem.imageUrl, [
          Validators.required
        ]],
        price: [this.foodItem.price, [
          Validators.required
        ]],
        dateOfLaunch: [this.foodItem.dateOfLaunch.toISOString().substring(0, 10), [
          Validators.required
        ]],
        category: [this.foodItem.category, [
          Validators.required
        ]],
        active: [this.foodItem.active, [
          Validators.required
        ]],
        freeDelivery: [this.foodItem.freeDelivery]
      });
    });

    this.itemForm = this.formBuild.group({
      itemName: [null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]],
      itemURL: [null, [
        Validators.required
      ]],
      price: [null, [
        Validators.required
      ]],
      dateOfLaunch: [null, [
        Validators.required
      ]],
      category: [null, [
        Validators.required
      ]],
      active: [null, [
        Validators.required
      ]],
      freeDelivery: [null]
    });
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
  get freeDelivery() {
    return this.itemForm.get('freeDelivery');
  }
  onSubmit() {
    const newItem: FoodItem = {
      id: this.foodItem.id,
      title: this.itemForm.value['itemName'],
      price: +this.itemForm.value['price'],
      active: this.itemForm.value['active'],
      dateOfLaunch: new Date(this.itemForm.value['dateOfLaunch']),
      category: this.itemForm.value['category'],
      freeDelivery: this.itemForm.value['freeDelivery'],
      imageUrl: this.itemForm.value['itemURL']
    };

    // this.foodservice.updateFoodItem(newItem);
    this._menuItem.save(newItem).subscribe();
    this.editdone = true;
    // this._menuItem.save(newItem);
    console.log(newItem);
    // this.router.navigate(['search-bar'])
  }

  onSaveClicked() {

  }
}
