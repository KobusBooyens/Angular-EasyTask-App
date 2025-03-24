import { Component, computed, EventEmitter, input, Output, output } from '@angular/core';
import { DUMMY_USERS } from '../static-data/dummy-users';
import { User } from '../models/user';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  //inputs
  user = input.required<User>();
  selected = input.required<boolean>();

  //outputs
  selectedUser = output<string>();

  //computed
  imagePath = computed(() => `images/users/${this.user().avatar}`);

  //methods
  onUserSelected() {
    this.selectedUser.emit(this.user().id);
  }
}