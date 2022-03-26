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

  ngOnInit() {}

  addToList() {
    if (this.newTask == '') {
    } else {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  deleteTask(index:any) {
    this.tasks.splice(index, 1);
  }
}
