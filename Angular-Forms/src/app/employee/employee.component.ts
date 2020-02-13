import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Emp } from '../emp';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeForm:FormGroup;
  submitted=false;
  id:string;
  name:string;
  joinDate:Date;
  designation:string;
  mobile:number;
  email:string;
  pwd:string;
  item:Emp;
  list:Emp[]=[];
  constructor(private formbuilder:FormBuilder) {
    
   
   }

  ngOnInit() {
    this.employeeForm=this.formbuilder.group({
      id:['',[Validators.required,Validators.pattern("^E[0-9]{4}$")]],
      name:['',[Validators.required,Validators.pattern("^[A-Z]{4,20}$")]],
      joinDate:['',Validators.required],
      designation:['',Validators.required],
      mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      email:['',Validators.email],
      pwd:['',[Validators.required,Validators.pattern("^[a-zA-Z]{7}[!@#$%^&*_]{1}$")]]
    });
  }
  get f()
  {
    return this.employeeForm.controls;
  }
  onSubmit()
  {
    
    this.submitted=true;
    if(this.employeeForm.valid)
    {
      alert('SUCCESS!!')
      console.log(JSON.stringify(this.employeeForm.value));
      this.item=new Emp();
    this.item.id=this.employeeForm.value["id"];
    this.item.name=this.employeeForm.value["name"];
    this.item.joinDate=this.employeeForm.value["joinDate"];
    this.item.designation=this.employeeForm.value["designation"];
    this.item.mobile=this.employeeForm.value["mobile"];
    this.item.email=this.employeeForm.value["email"];
    this.item.pwd=this.employeeForm.value["pwd"];
    this.list.push(this.item);
    }
    
  }
 


}
