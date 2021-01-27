import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartCounter: number = 1;
  isDecrementDisabled: boolean = true;

  constructor() {}

  ngOnInit(): void {}

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
