import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userName = 'Test Username';

  onUserNameEmpty() {
    if (this.userName === '') {
      return true;
    } else {
      return false;
    }
  }

  onCreateUser() {
    this.userName = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
