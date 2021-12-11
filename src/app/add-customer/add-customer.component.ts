import { Customer } from './../customer/customer.object';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CUSTOMERS } from '../customer/customer.object';
import { addcustomer } from './add-customer.object';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  addedcustomer: any;
  addcustomers = new addcustomer;
  customerList = CUSTOMERS;
  router: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  
  }
 
  addcustomer(f: NgForm){
    let newCustomer = new addcustomer();
    newCustomer.name = f.value['name']
    newCustomer.id = f.value['id']
    newCustomer.contact = f.value['contact']
    newCustomer.address = f.value['address']
    alert("Success!");
    console.log(newCustomer);
    this.customerList.push(newCustomer);
    console.log(newCustomer);
    console.log(this.customerList);
    newCustomer = new addcustomer();
  }
}
