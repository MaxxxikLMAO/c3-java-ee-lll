import {Component, OnInit} from '@angular/core';
import {User} from './Models/user';
import {CurrentUserService} from './current-user.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'front-end';
  get user(): User {
    return this.currentUser.user;
  }

  constructor(private currentUser: CurrentUserService, private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('http://localhost:4200/TotallyMyAppXd/api/user').subscribe(
      (data: User) => {
        this.currentUser.user = data;
      }
    );
  }
}
