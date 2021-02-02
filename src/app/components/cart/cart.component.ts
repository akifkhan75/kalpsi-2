import { Component, OnInit } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef
} from '@angular/material/bottom-sheet';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartCounter: number = 1;
  isDecrementDisabled: boolean = true;

  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}

  openBottomSheet(): void {
    this._bottomSheet.open(CartBottomSheet);
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

@Component({
  selector: 'cart-bottom-sheet',
  templateUrl: 'cart-bottom-sheet.html'
})
export class CartBottomSheet {
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
  constructor(private _bottomSheetRef: MatBottomSheetRef<CartBottomSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
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
