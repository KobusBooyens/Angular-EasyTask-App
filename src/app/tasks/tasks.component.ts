import { Component, input, computed, signal } from '@angular/core';
import { User } from '../models/user';
import { TaskComponent } from "./task/task.component";
import { NewTask, Task } from '../models/task';
import { DUMMY_TASKS } from '../static-data/dummy-tasks';
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  //inputs
  user = input<User>();

  //state
  tasks = signal<Task[]>(DUMMY_TASKS)
  isAddingTask = signal<boolean>(false);

  //computed
  selectedUserTasks = computed(() =>
    this.tasks().filter(task => task.userId === this.user()?.id && !task.completed)
  );

  completeTask = computed(() => {
    return (taskId: string) => {
      //filter and update task to be completed
      this.tasks.update(currentTasks => currentTasks.map(task => {
        if (task.id === taskId) {
          console.log(task);
          return {
            ...task,
            completed: true
          }
        }
        return task;
      }));
    }
  });

  //events
  onTaskComplete(taskId: string) {
    this.completeTask()(taskId);
  }

  onAddTask() {
    this.isAddingTask.set(true);
  }

  onSubmitAddTask(newTask: NewTask) {
    this.tasks.update(currentTasks => [
      ...currentTasks,
      {
        id: `t${this.tasks().length + 1}`,
        userId: this.user()?.id || '',
        title: newTask.title,
        summary: newTask.summary,
        dueDate: newTask.dueDate,
        completed: false
      }
    ]);

    this.isAddingTask.set(false);
  }

  onCancelAddTask() {
    this.isAddingTask.set(false);
  }
}
