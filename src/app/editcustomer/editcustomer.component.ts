import { CUSTOMERS } from './../customer/customer.object';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {

  selectedcustomer: any;
  customers = CUSTOMERS;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        for (let customer of this.customers){
          if (customer.id == param['id']){ this.selectedcustomer = customer; }
          }
         
        console.log(param['id']);
      }
    );
  }

  updatecustomer(){
    alert("Success!");
    console.log(this.selectedcustomer);
  }
}
