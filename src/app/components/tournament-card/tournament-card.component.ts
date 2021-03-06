import { Component, OnInit } from '@angular/core';
import {TournamentsService} from "../../services/tournaments/tournaments.service";
import {Tournaments} from "../../models/tournaments";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tournament-card',
  templateUrl: './tournament-card.component.html',
  styleUrls: ['./tournament-card.component.scss']
})
export class TournamentCardComponent implements OnInit {

  tournaments:Tournaments[];
  gameId!: string;
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
