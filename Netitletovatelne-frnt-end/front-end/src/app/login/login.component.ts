import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  constructor(private http: HttpClient, private router: Router){
  }

  clickedButton() {
    if (this.password === this.password){
      this.router.navigate(['/games']);
    }
  }

  ngOnInit(): void {
  }

}
