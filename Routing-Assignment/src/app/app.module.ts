import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { AdminComponent } from './admin/admin.component';
import { BuyItemComponent } from './buy-item/buy-item.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { PaymentComponent } from './payment/payment.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ViewItemsComponent } from './view-items/view-items.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddRemoveBuyerComponent } from './add-remove-buyer/add-remove-buyer.component';
import { AddRemoveSellerComponent } from './add-remove-seller/add-remove-seller.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuyerComponent,
    SellerComponent,
    AdminComponent,
    BuyItemComponent,
    ViewCartComponent,
    PaymentComponent,
    AddItemComponent,
    ViewItemsComponent,
    AddCategoryComponent,
    AddRemoveBuyerComponent,
    AddRemoveSellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
