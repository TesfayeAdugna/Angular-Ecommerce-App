import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CUSTOMERS } from '../customer/customer.object';

@Component({
  selector: 'app-veiw-customer',
  templateUrl: './veiw-customer.component.html',
  styleUrls: ['./veiw-customer.component.css']
})
export class VeiwCustomerComponent implements OnInit {

  viewcustomers = CUSTOMERS;
  selectedcustomer: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        for (let vcustomer of this.viewcustomers){
          if (vcustomer.id == param['id']){ this.selectedcustomer = vcustomer; }
          }
         
        console.log(param['id']);
      }
    );
  }

}
