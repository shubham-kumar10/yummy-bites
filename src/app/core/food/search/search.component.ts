import { Component, OnInit, Input } from '@angular/core';
import { FoodItem } from 'src/app/shared/models/foodItem.model';
import { MenuItemService } from '../../../shared/services/menu-item.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchKey: string;
  itemList: FoodItem[];
  filteredItemList: FoodItem[];
  isAdmin: boolean;

  constructor(
    private _menuItem: MenuItemService
  ) { }

  ngOnInit() {
    this._menuItem.getAllMenuItems().subscribe(data => {
      this.itemList = data;
    });
    this.filteredItemList = this.itemList;
  }

  search(): void {
    this.filteredItemList = this.itemList.filter((item) => item.title.toLocaleLowerCase().includes(this.searchKey.toLocaleLowerCase()));
    this._menuItem.getSubject().next(this.filteredItemList);
  }
}
