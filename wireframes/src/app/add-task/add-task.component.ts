import { Component, OnInit } from '@angular/core';
import { Task } from '../Models/task';
import {Router} from '@angular/router';
import { Key } from 'protractor';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  list:Task[]=[];
  name:string;
  priority:Range;
  startDate:Date;
  endDate:Date;
  Key:string;
  item:Task;
  constructor(private route:Router) { 
    this.item=new Task();
  }

  ngOnInit() {
  }
public AddTask()
{
  
  this.item.name=this.name;
  this.item.priority=this.priority;
  this.item.startDate=this.startDate;
  this.item.endDate=this.endDate;
  if(localStorage.getItem('tsk'))
  {
    this.list=JSON.parse(localStorage.getItem('tsk'));
  }
  this.list.push(this.item);
 D:
  localStorage.setItem("tsk",JSON.stringify(this.list));
  console.log(this.list)
}
public Reset()
{
   
  this.item.name=null;
  this.item.priority=null;
  this.item.startDate=null;
  this.item.endDate=null;
}
}
