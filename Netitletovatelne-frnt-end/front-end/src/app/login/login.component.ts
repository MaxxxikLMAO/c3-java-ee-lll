import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../Models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  users: User[] = [];
  url = 'http://localhost:4200/TotallyMyAppXd/api/user/login';

  constructor(private http: HttpClient, private router: Router) {
  }

  clickedButton() {
    if (this.password === this.password) {
      this.http.post(this.url, {username: this.username, password: this.password},
        {responseType: 'text'}).subscribe(
        (data: any) => {
          this.router.navigate(['/games']);
        }, (error) => {
          console.error(error);
        }
      );
    }
  }

  ngOnInit() {

  }

}
