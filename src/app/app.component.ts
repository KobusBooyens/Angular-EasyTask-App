import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from "./static-data/dummy-users";
import { User } from './models/user';
import { TasksComponent } from './tasks/tasks.component';

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

export class AppComponent {

  title = 'First Angular App';
  users = DUMMY_USERS;
  selectedUserId = signal<string>('');

  onUserSelected(userId: string) {
    console.log(userId);
    this.selectedUserId.set(userId);
  }

  selectedUser = computed(() =>
    this.users.find(user => user.id === this.selectedUserId())
  );
}
