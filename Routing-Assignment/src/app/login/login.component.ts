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
//bname:string;
//bpwd:string;
//sname:string;
//spwd:string;
errmsg:string;
  constructor(private route:Router) { }

  ngOnInit() {
  }
  public Validate()
  {
    sessionStorage.setItem("un",this.uname)
    //sessionStorage.setItem("bun",this.bname)
    //sessionStorage.setItem("sun",this.sname)
    if(this.uname=="sai" && this.pwd=="sai123")
    {
      sessionStorage.setItem("un",this.uname)
      this.route.navigateByUrl('admin')
    }
    else if(this.uname=="ramya"&&this.pwd=="ramya123")
    {
      sessionStorage.setItem("un",this.uname)
      this.route.navigateByUrl('buyer')
    }
    else if(this.uname=="pooja" && this.pwd=="pooja123")
    {
      sessionStorage.setItem("un",this.uname)
      this.route.navigateByUrl('seller')
    }
    else
    {
      this.errmsg="Invalid login credentials";
    }
  }

}
