import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
submitted=false;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.loginForm=this.formbuilder.group({
      uname:['',Validators.required],
      pwd:['',Validators.required]
    });

  }
  onSubmit()
  {
    this.submitted=true;
    if(!this.loginForm.invalid)
    {
      return;
    }
    else
    {
      alert("Form is validated");
    }
  }
  get f()
  {
    return this.loginForm.controls;
  }
  onReset()
  {
    this.submitted=false;
    this.loginForm.reset();
  }

}
