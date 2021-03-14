import { Component, OnInit } from '@angular/core';
import {Game} from '../Models/game-params';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  title = 'MyGamerApi';
  url = 'http://localhost:4200/TotallyMyAppXd/api/games';
  games: Game[] = [];
  id = '';
  name = '';
  price = '';
  studio = '';

  constructor(private http: HttpClient, private router: Router) {

  }

  addGame(): void {
    const body = {
      id: this.id,
      name: this.name,
      price: this.price,
      studio: this.studio
    };
    this.http.post(this.url, body, {observe: 'response'}).subscribe(
      (data) => {
        console.log(data);
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  checkGame(id: number): void {
    this.router.navigateByUrl('detail/' + id);
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(
      (data: Game[]) => {
        this.games = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
