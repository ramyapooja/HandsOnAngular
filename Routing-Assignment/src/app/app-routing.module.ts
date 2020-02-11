import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {SellerComponent} from './seller/seller.component';
import {BuyerComponent} from './buyer/buyer.component';
import {LoginComponent} from './login/login.component';
import {BuyItemComponent} from './buy-item/buy-item.component';
import {ViewCartComponent} from './view-cart/view-cart.component';
import {PaymentComponent} from './payment/payment.component';
import {AddItemComponent} from './add-item/add-item.component';
import {ViewItemsComponent} from './view-items/view-items.component';
import {AddCategoryComponent} from './add-category/add-category.component';
import {AddRemoveBuyerComponent} from './add-remove-buyer/add-remove-buyer.component';
import {AddRemoveSellerComponent} from './add-remove-seller/add-remove-seller.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent,children:[
    {path:'addCategory',component:AddCategoryComponent},
    {path:'add-remove-buyer',component:AddRemoveBuyerComponent},
    {path:'add-remove-seller',component:AddRemoveSellerComponent},

  ]},
  {path:'buyer',component:BuyerComponent,children:[
    { path:'buyItem',component:BuyItemComponent},
    {path:'viewCart',component:ViewCartComponent},
    {path:'payment',component:PaymentComponent}
  ]},
  {path:'seller',component:SellerComponent,children:[
    {path:'addItem',component:AddItemComponent},
    {path:'viewItems',component:ViewItemsComponent},
    
  ]},
    {path:'',redirectTo:'login',pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
