import { Component, computed, input, output } from '@angular/core';
import { User } from '../models/user';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
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