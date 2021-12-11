import { VeiwCustomerComponent } from './veiw-customer/veiw-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerComponent } from './customer/customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';

const routes: Routes = [
  {
    path: 'products/detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'customer/editcustomer/:id',
    component: EditcustomerComponent
  },
  {
    path: 'customer/veiw-customer/:id',
    component: VeiwCustomerComponent
  },
  {
    path: 'customer/add-customer',
    component: AddCustomerComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
