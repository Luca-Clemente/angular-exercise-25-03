import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: string[] = [];

  newTask: any;

  constructor() {}

  ngOnInit() {
    this.tasks = [JSON.parse(localStorage.getItem('Lista'))];
  }

  addToList() {
    if (this.newTask == '') {
    } else {
      this.tasks.push(this.newTask);
      this.newTask = '';
      localStorage.setItem('lista',JSON.stringify(this.tasks));
    }
  }

  deleteTask(index:any) {
    this.tasks.splice(index, 1);
  }
}
