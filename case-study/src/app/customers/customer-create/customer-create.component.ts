import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {TypeCustomerService} from '../../service/type-customer.service';
import {TypeCustomer} from '../../model/type-customer';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  typeCustomers: TypeCustomer[] = [];

  constructor(private customerService: CustomerService,
              private typeCustomerService: TypeCustomerService) {
  }

  ngOnInit(): void {
    this.getAllTypeCustomer();
  }

  getAllTypeCustomer() {
    this.typeCustomerService.getAll().subscribe(data => {
      this.typeCustomers = data;
    }, error => {
      console.log(error);
    });
  }
}
