import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatBottomSheet,
  MatBottomSheetRef
} from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}

  openCartOptions(): void {
    this._bottomSheet.open(CartOptions);
  }
}

@Component({
  selector: 'cart-options',
  templateUrl: 'cart-options.html'
})
export class CartOptions {
  public cartCounter: number = 1;
  isDecrementDisabled: boolean = true;

  additionalItems = new FormControl();
  toppings = new FormControl();
  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato'
  ];

  constructor(private _bottomSheetRef: MatBottomSheetRef<CartOptions>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  closeCartOptions(): void {
    this._bottomSheetRef.dismiss();
  }
  onIncrement() {
    this.cartCounter = this.cartCounter + 1;
    if (this.cartCounter > 1) {
      this.isDecrementDisabled = false;
    } else {
      this.isDecrementDisabled = true;
    }
  }
  ondecrement() {
    this.cartCounter = this.cartCounter - 1;
    if (this.cartCounter > 1) {
      this.isDecrementDisabled = false;
    } else {
      this.isDecrementDisabled = true;
    }
  }
}
