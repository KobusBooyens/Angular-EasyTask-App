import { Component, output, signal } from '@angular/core';
import { NewTask } from '../../models/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {
  //outputs
  add = output<NewTask>();
  cancel = output<void>();

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

    this.add.emit(task);
  }

  onCancel() {
    this.cancel.emit();
  }
}
