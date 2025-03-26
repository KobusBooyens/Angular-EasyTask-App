import { computed, Injectable, signal } from '@angular/core';
import { DUMMY_TASKS } from '../static-data/dummy-tasks';
import { NewTask, Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  //state
  private tasksData = signal<Task[]>(DUMMY_TASKS);


  getUserTasks(userId: string) {
    return this.tasksData().filter(task => task.userId === userId && !task.completed);
  }

  addTask(task: NewTask, userId: string) {
    this.tasksData.update(currentTasks => [
      {
        id: `t${currentTasks.length + 1}`,
        userId: userId,
        title: task.title,
        summary: task.summary,
        dueDate: task.dueDate,
        completed: false
      },
      ...currentTasks
    ]);
  }

  removeTask(taskId: string) {
    this.tasksData.update(currentTasks => currentTasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: true
        }
      }
      return task;
    }));
  }
}
