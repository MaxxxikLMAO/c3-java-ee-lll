import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../Models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  users: User[] = [];
  constructor(private http: HttpClient, private router: Router){
  }

  clickedButton() {
    if (this.password === this.password) {
      this.http.post('/api/games', {email: this.email, password: this.password}).subscribe(
        (data: any) => {
          this.router.navigate(['/games']);
        }, (error) => {

        }
      );
    }
  }

  ngOnInit() {
    this.http.get('/api/games').subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

}
