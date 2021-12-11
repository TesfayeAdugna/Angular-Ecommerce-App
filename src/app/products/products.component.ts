import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, PRODUCTS } from './product.object';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList = PRODUCTS;

  constructor(private router:Router){}

  onViewDetail(id: number, price: number, name: string){
    console.log(id);
    this.router.navigateByUrl('/products/detail/'+id);
  }


  ngOnInit(): void {

  }
  
}
