import { Component, OnInit } from '@angular/core';
import {User} from '../Models/user';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = '';
  password = '';
  users: User[] = [];

  constructor(private http: HttpClient, private router: Router){

  }
  clickedButton() {
    this.http.post('api/user', {password: this.password, username: this.username, }).subscribe(
      (data: any) => {
        this.router.navigate(['/register']);
      }, (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.http.get('api/user').subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

}
