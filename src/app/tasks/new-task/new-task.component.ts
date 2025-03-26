import { Component, input, output, signal } from '@angular/core';
import { NewTask } from '../../models/task';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {
  constructor(private tasksService: TasksService) { }

  //inputs
  userId = input.required<string>();

  //outputs
  closeNewTaskDialog = output<void>();

  titleInput = "";
  summaryInput = "";
  dueDateInput = "";

  //events
  onSubmit() {
    const task: NewTask = {
      title: this.titleInput,
      summary: this.summaryInput,
      dueDate: this.dueDateInput
    };

    this.tasksService.addTask(task, this.userId());
    this.closeNewTaskDialog.emit();
  }

  onCloseNewTaskDialog() {
    this.closeNewTaskDialog.emit();
  }
}
