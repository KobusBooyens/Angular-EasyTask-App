import { Component, input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  //inputs
  user = input.required<User | undefined>();
}
