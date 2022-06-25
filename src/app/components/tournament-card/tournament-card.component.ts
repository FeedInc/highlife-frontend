import { Component, OnInit } from '@angular/core';
import {TournamentsService} from "../../services/tournaments/tournaments.service";
import {Tournaments} from "../../models/tournaments";

@Component({
  selector: 'app-tournament-card',
  templateUrl: './tournament-card.component.html',
  styleUrls: ['./tournament-card.component.scss']
})
export class TournamentCardComponent implements OnInit {

  tournaments:Tournaments[];

  constructor(private OffersService: TournamentsService) {
    this.tournaments = [];
  }

  getAllOffers() {
    this.OffersService.getAll().subscribe((response: any) => {
      this.tournaments = response;
    })
  }

  ngOnInit() {
    this.getAllOffers();
  }

}
