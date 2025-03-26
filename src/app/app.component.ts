import { Component, computed, OnInit, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from './tasks/tasks.component';
import { UserService } from './user/user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  title = 'First Angular App';
  users = signal<User[]>([]);
  selectedUser = signal<User | undefined>(undefined);

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users.set(this.userService.getUser());
  }

  onUserSelected(userId: string) {
    console.log(userId);
    this.selectedUser.set(this.userService.getSelectedUser(userId)());
  }
}
