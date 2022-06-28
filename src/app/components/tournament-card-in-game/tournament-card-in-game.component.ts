import { Component, OnInit } from '@angular/core';
import {Tournaments} from "../../models/tournaments";
import {ActivatedRoute} from "@angular/router";
import {TournamentsService} from "../../services/tournaments/tournaments.service";

@Component({
  selector: 'app-tournament-card-in-game',
  templateUrl: './tournament-card-in-game.component.html',
  styleUrls: ['./tournament-card-in-game.component.scss']
})
export class TournamentCardInGameComponent implements OnInit {

  tournaments:Tournaments[];
  gameId!: string;
  count!: number;
  // constructor(private TournamentService: TournamentsService) {
  //   this.tournaments = [];
  // }
  constructor(private route: ActivatedRoute, private TournamentService: TournamentsService) {
    this.tournaments = [];
    this.route.paramMap.subscribe(params =>
      this.gameId = String(params.get("gameId"))
    );
  }
  getTournaments() {
    this.TournamentService.getAll().subscribe((response: any) => {
      this.tournaments = response;
    })
  }

  ngOnInit() {
    this.getTournaments();
  }

}
