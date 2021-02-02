import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  order: string;
  no: number;
  amount: number;
  date: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    no: 1,
    order: 'Egg and Toast',
    amount: 740.0,
    date: '12/17/2021',
    actions: 'test'
  },
  {
    no: 1,
    order: 'Egg and Toast',
    amount: 740.0,
    date: '12/17/2021',
    actions: 'test'
  },
  {
    no: 1,
    order: 'Egg and Toast',
    amount: 740.0,
    date: '12/17/2021',
    actions: 'test'
  },
  {
    no: 1,
    order: 'Egg and Toast',
    amount: 740.0,
    date: '12/17/2021',
    actions: 'test'
  }
];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  displayedColumns: string[] = ['no', 'order', 'amount', 'date', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
