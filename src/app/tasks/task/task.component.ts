import { Component, input, output } from '@angular/core';
import { Task } from '../../models/task';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
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
