import { Component, input, output } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  //inputs
  task = input.required<Task>();

  //outputs
  onSelectedTaskComplete = output<string>();

  //events
  onTaskComplete(taskId: string) {
    this.onSelectedTaskComplete.emit(taskId);
  }
}
