import { Component } from '@angular/core';
import {User} from './Models/user';
import {CurrentUserService} from './current-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  get user(): User{
    return this.currentUser.user;
  }

  constructor(private currentUser: CurrentUserService) {

  }

}
