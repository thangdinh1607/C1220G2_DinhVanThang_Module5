import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Customer} from '../Customer';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
customers: Customer[] = [
  {id: 1, typeCustomer: 1, name: 'Gau Gau', dateOfBirth: '12/12/2000', idCard: '123123123' , phoneNumber: '0905123456', email: 'gaugau@gmail.com' , address : 'Da Nang'},
  {id: 2, typeCustomer: 2, name: 'Meo Meo', dateOfBirth: '12/12/2001', idCard: '456456456' , phoneNumber: '0905123456', email: 'meomeo@gmail.com' , address : 'Ha Noi'},
  {id: 3, typeCustomer: 3, name: 'Lee Van Sin', dateOfBirth: '12/12/2002', idCard: '123123123' , phoneNumber: '0905123456', email: 'levansin@gmail.com' , address : 'Sai Gon'},
  {id: 4, typeCustomer: 4, name: 'Hehe', dateOfBirth: '12/12/2002', idCard: '123123123' , phoneNumber: '0905123456', email: 'hehe@gmail.com' , address : 'Sai Gon'},
];
  constructor() { }

  ngOnInit(): void {
  }

}
