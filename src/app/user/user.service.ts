import { computed, Injectable, signal } from '@angular/core';
import { User } from '../models/user';
import { DUMMY_USERS } from '../static-data/dummy-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //state
  private userData = signal<User[]>([]);

  constructor() {
    const users = localStorage.getItem('users');
    if (users) {
      this.userData.set(JSON.parse(users));
    } else {
      this.userData.set(DUMMY_USERS);
      localStorage.setItem('users', JSON.stringify(DUMMY_USERS));
    }
  }

  getUser() {
    return this.userData();
  }

  getSelectedUser(id: string) {
    return computed(() => this.userData().find(user => user.id === id));
  }
}
