import { Component, input, computed, signal, OnInit } from '@angular/core';
import { User } from '../models/user';
import { TaskComponent } from "./task/task.component";
import { NewTask, Task } from '../models/task';
import { TasksService } from './tasks.service';
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  constructor(private tasksService: TasksService) { }

  //inputs
  user = input.required<User>();

  //state
  showNewTaskDialog = signal<boolean>(false);

  //computed
  userTasks = computed(() => this.tasksService.getUserTasks(this.user().id));

  //handlers
  onShowNewTaskDialog() {
    this.showNewTaskDialog.set(true);
  }

  onSubmitAddTask(newTask: NewTask) {
    this.tasksService.addTask(newTask, this.user().id);
    this.showNewTaskDialog.set(false);
  }

  onCloseNewTaskDialog() {
    this.showNewTaskDialog.set(false);
  }
}