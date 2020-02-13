import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import {RegisterComponent} from './register/register.component';
import {EmployeeComponent} from './employee/employee.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductComponent},
  {path:'Register',component:RegisterComponent},
  {path:'employee',component:EmployeeComponent}
  //{path:'',redirectTo:'product',pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
