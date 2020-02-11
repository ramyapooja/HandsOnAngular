import { Component, OnInit } from '@angular/core';
import { Task } from '../Models/task';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
lists:Task[];
  constructor() {
    this.lists=JSON.parse(localStorage.getItem('tsk'));
    console.log(this.lists)
   }

  ngOnInit() {
  }

}
