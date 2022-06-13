import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {TournamentsService} from "../../services/tournaments.service";
import {Tournaments} from "../../models/tournaments";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
@Component({
  selector: 'app-tournament-card',
  templateUrl: './tournament-card.component.html',
  styleUrls: ['./tournament-card.component.scss']
})
export class TournamentCardComponent implements OnInit {

  offersArray:Tournaments[];
  offersData: Tournaments;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private OffersService: TournamentsService) {
    this.offersArray = {} as Tournaments[];
    this.dataSource = new MatTableDataSource<any>();
    this.offersData = {} as Tournaments;
  }

  getAllOffers() {
    this.OffersService.getAll().subscribe((response: any) => {
      this.offersArray = response;
      this.dataSource=response;
    })
  }

  ngOnInit() {
    this.getAllOffers();
  }


}
