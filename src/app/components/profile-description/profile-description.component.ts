import {Component, Input, OnInit} from '@angular/core';
import {UsersApiService} from '../../services/users-api.service';
import {ToolsService} from '../../services/tools.service';
import {GamesApiService} from 'src/app/services/games-api.service';

import {forkJoin, switchMap} from 'rxjs';

@Component({
  selector: 'app-profile-description',
  templateUrl: './profile-description.component.html',
  styleUrls: ['./profile-description.component.scss'],
})
export class ProfileDescriptionComponent implements OnInit {
  @Input() id: string | null = null;
  user: any | null = null;
  datasChart: Array<any> = [];
  games: Array<any> = [];
  medals: Array<any> = [];
  colors: Array<any> = [
    'rgba(255, 99, 132,',
    'rgba(54, 162, 235,',
    'rgba(255, 206, 86,',
    'rgba(75, 192, 192,',
    'rgba(153, 102, 255,',
    'rgba(255, 159, 64,'
  ];


  constructor(
    private apiUsers: UsersApiService,
    private tools: ToolsService,
    private apiGames: GamesApiService
  ) {}

  ngOnInit(): void {
    this.getUserInfo();
  }

  initializeCharts() {
    console.log(this.user?.stats);
    let index = 0;
    for (let stats of this.user?.stats) {
      var temp = this.games?.find((res: any) => res.id == stats.gameId);
      var chartType = undefined;
      var chartScales = undefined;
      if(temp.type == "moba") {
        chartType = "radar";
        chartScales = {
          r: {
            min: 0,
            max: 100,
            ticks: {
              stepSize: 20,
            },
          },
        };
      }
      else if(temp.type == "shooter")
      chartType = "bar";

      var tempDataChart = {
        logo: temp.logo,
        title: temp.name,
        dataChart: {
          type: chartType,
          data: {
            labels: temp.statsLabels,
            datasets: [
              {
                label: "Stats",
                data: this.user?.stats.find((stat: any) => stat.gameId == temp.id).data,
                backgroundColor: `${this.colors[index]} 0.2)`,
                borderColor: `${this.colors[index]} 1)`,
                borderWidth: 1,
              }
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: chartScales
          },
        }
      };
      console.log(tempDataChart);
      this.datasChart.push(tempDataChart);
      index = index + 1;
    }
  }

  socials = [
    { class: 'bi bi-instagram', name: 'Instagram' },
    { class: 'bi bi-facebook', name: 'Facebook' },
    { class: 'bi bi-reddit', name: 'Reddit' },
  ];

  getUserInfo(): void {
    this.apiUsers
      .getUser(this.id!)
      .pipe(
        switchMap((res: any) => {
          console.log(res);
          this.user = res;
          const ids = this.user?.games;
          const promises = [];
          for (let id of ids) {
            promises.push(this.apiGames.getGame(id));
          }
          return forkJoin(promises);
        })
      )
      .subscribe({
        next: value => {
          this.games = value;
          const findMedals = [];
          for (let medalUser of this.user?.medals) {
            var foundGame = this.games?.find((game: any) => game.id == medalUser.game);
            const nameGame = foundGame.name;
            const medalFound = foundGame.medals?.find((medal: any) => medal.name == medalUser.medal);
            findMedals.push({
              medalData: medalFound,
              nameGame: nameGame
            });
          }
          this.medals = findMedals;
          this.initializeCharts();
          // console.log(findedMedals);
        },
        complete: () => console.log("Finished")
      });
  }

  get completeName() {
    return `${this.user?.name?.title} ${this.user?.name?.first} ${this.user?.name?.last}`;
  }
  get location() {
    return `${this.user?.location?.country} ${this.user?.location?.state} ${this.user?.location?.city}`;
  }

  get userType() {
    return this.tools.capitalize(this.user?.type);
  }
}
