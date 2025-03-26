import { Component, input, output } from '@angular/core';
import { Task } from '../../models/task';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {

  constructor(private tasksService: TasksService) { }

  //inputs
  task = input.required<Task>();

  //events
  onTaskComplete(taskId: string) {
    this.tasksService.removeTask(taskId);
  }
}
