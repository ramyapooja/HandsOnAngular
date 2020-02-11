import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
productForm:FormGroup;
submitted=false;
  constructor(private formbuilder:FormBuilder) { 

  }

  ngOnInit() {
    this.productForm=this.formbuilder.group({
      pid:['',Validators.required],
      name:['',Validators.required],
      price:['',Validators.required],
      stock:['',Validators.required]
    });
  }
  Add()
  {
    this.submitted=true;
    if(!this.productForm.invalid)
    {
      return;
    }
    else
    {
      alert("product added");
    }
  }
  get f()
  {
    return this.productForm.controls;
  }
  onReset()
  {
    this.submitted=false;
    this.productForm.reset();
  }
  

}
