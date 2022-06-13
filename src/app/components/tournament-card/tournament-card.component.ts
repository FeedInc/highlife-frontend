import { Component, OnInit,ViewChild } from '@angular/core';
import {TournamentsService} from "../../services/tournaments/tournaments.service";
import {Tournaments} from "../../models/tournaments";

@Component({
  selector: 'app-tournament-card',
  templateUrl: './tournament-card.component.html',
  styleUrls: ['./tournament-card.component.scss']
})
export class TournamentCardComponent implements OnInit {

  offersArray:Tournaments[];

  constructor(private OffersService: TournamentsService) {
    this.offersArray = [];
  }

  getAllOffers() {
    this.OffersService.getAll().subscribe((response: any) => {
      this.offersArray = response;
    })
  }

  ngOnInit() {
    this.getAllOffers();
  }


}
