import {Component, OnInit} from '@angular/core';
import {IGame} from "../../models/IGame";
import {GamesApiService} from "../../services/games/games-api.service";
import {ActivatedRoute} from "@angular/router";
import { Subscription} from "rxjs";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  game!:IGame
  routeSub: Subscription | undefined
  constructor( private gamesApiService: GamesApiService,private activatedRoute: ActivatedRoute) {}

  getGamesById() {

    this.routeSub = this.activatedRoute.params.subscribe(params => {
      // console.log(params) //log the entire params object
      // console.log(params['gameId']) //log the value of id
      this.gamesApiService.getGame(params['gameId'])
        .subscribe((game: any) => {
            this.game = game
          // console.log(game)
        })
    });


  }
  ngOnInit() {

    this.getGamesById()
  }
}
