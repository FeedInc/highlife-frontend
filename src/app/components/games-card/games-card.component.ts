import {Component, OnInit, ViewChild} from '@angular/core';
import { Games } from "../../models/games";
import { GamesApiService} from "../../services/games/games-api.service";

@Component({
  selector: 'app-games-card',
  templateUrl: './games-card.component.html',
  styleUrls: ['./games-card.component.scss']
})
export class GamesCardComponent implements OnInit {

  gamesArray:Games[];
  // offersData: Tournaments;
  // dataSource: MatTableDataSource<any>;

 /* @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;
  // @ViewChild(MatSort)
  // sort!: MatSort;*/

  constructor(private OffersService: GamesApiService) {
    this.gamesArray =[];
    // this.dataSource = new MatTableDataSource<any>();
    // this.offersData = {} as Tournaments;
  }

  getAllOffers() {
    this.OffersService.getAllGames().subscribe((response:any=[]) => {
      this.gamesArray = response;

      // this.dataSource=response;
    })
  }

  ngOnInit() {
    this.getAllOffers();
  }

}
