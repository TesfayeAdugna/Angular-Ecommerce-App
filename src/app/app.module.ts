import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { VeiwCustomerComponent } from './veiw-customer/veiw-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomerComponent,
    ProductDetailComponent,
    EditcustomerComponent,
    AddCustomerComponent,
    VeiwCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
