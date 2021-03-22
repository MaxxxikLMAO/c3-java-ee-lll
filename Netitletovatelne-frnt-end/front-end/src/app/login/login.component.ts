import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../Models/user';
import {CurrentUserService} from '../current-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  url = 'http://localhost:4200/TotallyMyAppXd/api/user/login';

  constructor(private http: HttpClient, private router: Router,
              private currentUser: CurrentUserService) {
  }

  clickedButton() {
    this.http.post(this.url, {username: this.username, password: this.password}).subscribe(
      (data: User) => {
        this.currentUser.user = data;
        this.router.navigate(['/games']);
      }, (error) => {
        console.error(error);
      }
    );
  }


  ngOnInit() {

  }

}
