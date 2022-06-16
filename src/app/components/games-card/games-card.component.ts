import {Component, OnInit} from '@angular/core';
import { IGame } from "../../models/IGame";
import { GamesApiService} from "../../services/games/games-api.service";

@Component({
  selector: 'app-games-card',
  templateUrl: './games-card.component.html',
  styleUrls: ['./games-card.component.scss']
})
export class GamesCardComponent implements OnInit {
  // gamesId!: string;
  gamesArray:IGame[];

  constructor( private gamesApiService: GamesApiService) {
    this.gamesArray =[];
  }

  getAllGames() {
    this.gamesApiService.getAllGames().subscribe((response:any=[]) => {
      this.gamesArray = response;
    })
  }

  ngOnInit() {
    this.getAllGames();

  }

}
