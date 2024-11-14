import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component'; 
import { Maincomponent } from './app/main/main.component'; 
import { HeaderComponent } from './app/views/header/header.component';
import { ProductsComponent } from './app/modules/products/getProducts/products.component';
import { CreateProductComponent } from './app/modules/products/createProduct/create-product.component';
import { UpdateProductComponent } from './app/modules/products/update-product/update-product.component';
import { OrdersComponent } from './app/modules/orders/orders.component';
import { ReportsComponent } from './app/modules/reports/reports.component';
import { AuditComponent } from './app/modules/audit/audit.component';
import { UserComponent } from './app/modules/users/user.component';
import { RegisterComponent } from './app/views/register/register.component';
import { LoginComponent } from './app/views/login/login.component';


@NgModule({
  declarations: [
    AppComponent,         
    Maincomponent,
    HeaderComponent,
    ProductsComponent,
    CreateProductComponent,
    UpdateProductComponent,
    OrdersComponent,
    ReportsComponent,
    AuditComponent,
    UserComponent, 
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
