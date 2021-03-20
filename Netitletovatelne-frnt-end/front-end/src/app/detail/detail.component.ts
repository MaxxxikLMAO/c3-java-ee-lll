import { Component, OnInit } from '@angular/core';
import {Game} from '../Models/game-params';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  gameDetail: Game;
  url = 'http://localhost:4200/TotallyMyAppXd/api/games/';

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { }

  editGame() {
    this.http.put(this.url + this.gameDetail.id, this.gameDetail).subscribe(
      (data: Game) => {
        this.gameDetail = data;
      }, (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(p => {
      const id = p.get('id');
      this.http.get(this.url + id).subscribe(
        (data: Game) => {
          this.gameDetail = data;
        }, (error) => {
          console.log(error);
        });
    });
  }
}
