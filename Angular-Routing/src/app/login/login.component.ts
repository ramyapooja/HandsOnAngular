import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
uname:string;
pwd:string;
errmsg:string;
  constructor(private route:Router) { 
   
  }

  ngOnInit() {
  }
  public Validate()
  {
    if(this.uname=="Rohan" && this.pwd=="12345")
    {
      sessionStorage.setItem("un",this.uname)
      this.route.navigateByUrl('User')//user is name of the route
    }
    else
    {
      this.errmsg="Invalid Login credentials";
    }
  }

}
