import { Component, OnInit } from '@angular/core';
import {Tournaments} from "../../models/tournaments";
import {ActivatedRoute} from "@angular/router";
import {TournamentsService} from "../../services/tournaments/tournaments.service";

@Component({
  selector: 'app-tournament-card-one',
  templateUrl: './tournament-card-one.component.html',
  styleUrls: ['./tournament-card-one.component.scss']
})
export class TournamentCardOneComponent implements OnInit {

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
