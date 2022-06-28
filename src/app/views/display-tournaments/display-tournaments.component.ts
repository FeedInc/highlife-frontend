import { Component, OnInit } from '@angular/core';
import {IGame} from "../../models/IGame";
import {Subscription} from "rxjs";
import {GamesApiService} from "../../services/games/games-api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-display-tournaments',
  templateUrl: './display-tournaments.component.html',
  styleUrls: ['./display-tournaments.component.scss']
})
export class DisplayTournamentsComponent implements OnInit {

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
