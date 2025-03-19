import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from "./static-data/dummy-users";
import { User } from './models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'First Angular App';
  users = DUMMY_USERS;
  selectedUser = signal<User | undefined>(undefined);

  onUserSelected(user: User) {
    console.log(user);
    this.selectedUser.set(user);
  }
}
