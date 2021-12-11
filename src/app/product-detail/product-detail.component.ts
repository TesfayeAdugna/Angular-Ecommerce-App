import { PRODUCTS } from './../products/product.object';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  selectedProduct: any;
  products = PRODUCTS;
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        for (let product of this.products){
          if (product.id == param['id']){ this.selectedProduct = product; }
          }
         
        console.log(param['id']);
      }
    );
  }

  updateProduct(){
    alert("Success!");
    console.log(this.selectedProduct);
  }

}
