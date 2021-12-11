import { addcustomer } from './../add-customer/add-customer.object';
import { CUSTOMERS, Customer } from './customer.object';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerList = CUSTOMERS;
  newcustomer = new Customer();
  type: string = 'view';
  
  constructor(private router:Router) { }

  onViewDetail(id: number, name: string, address: string, contact: string){
    console.log(id);
    this.router.navigateByUrl('/customer/editcustomer/'+id);
  }
  customerForm(){
    console.log(this.newcustomer)
    
    this.type = 'view';
  }
 
  ViewDetail(id: number, name: string, address: string, contact: string){
    console.log(id);
    this.router.navigateByUrl('/customer/veiw-customer/'+id);
  }

  ngOnInit(): void {
  }
  deleteCustomer(id: any){
    alert("This will delete to the end!")
    this.customerList = this.customerList.filter((customer)=> { 
      return customer.id != id; 
  });
  }

}