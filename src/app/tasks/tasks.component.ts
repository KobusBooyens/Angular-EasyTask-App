import { Component, input, computed } from '@angular/core';
import { User } from '../models/user';
import { TaskComponent } from "./task/task.component";
import { Task } from '../models/task';
import { DUMMY_TASKS } from '../static-data/dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  //inputs
  user = input<User>();

  //computed
  selectedUserTasks = computed(() =>
    this.tasks.filter(task => task.userId === this.user()?.id)
  );
  markTaskComplete = computed(() =>
    this.tasks.filter(task => task.completed)
  );

  //state
  tasks: Task[] = DUMMY_TASKS

  //events
  onTaskComplete(taskId: string) {
    console.log("onTaskComplete", taskId);
  }
}
