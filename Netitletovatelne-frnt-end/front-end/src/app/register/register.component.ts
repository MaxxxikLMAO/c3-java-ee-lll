import { Component, OnInit } from '@angular/core';
import {User} from '../Models/user';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
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
  url = 'http://localhost:4200/TotallyMyAppXd/api/user/register';

  constructor(private http: HttpClient, private router: Router){

  }
  clickedButton() {
    this.http.post(this.url, new HttpParams().append('username', this.username).append('password', this.password),
      {headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')}).subscribe(
      (data: any) => {
        this.router.navigate(['/login']);
      }, (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit() {

  }

}
