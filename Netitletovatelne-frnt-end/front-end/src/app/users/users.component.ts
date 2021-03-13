import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {Game} from '../Models/game-params';
import {User} from '../Models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  username = '';
  password = '';
  users: User[] = [];

  constructor(private http: HttpClient, private router: Router){

  }
  clickedButton() {
    this.router.navigate(['/login']);
    this.http.post('api/user', {password: this.password, username: this.username, }).subscribe(
      (data: any) => {
        this.router.navigate(['/login']);
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
