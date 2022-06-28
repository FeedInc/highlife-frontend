import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../services/firebase-auth/auth.service';
import { Router } from '@angular/router';
import { GamesApiService } from '../../services/games/games-api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  userLogged = this.authService.getUserLogged();
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private gamesApiService: GamesApiService,
    private authService: AuthService,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {}

  logout() {
    this.authService.logOut();
    this.router.navigate(['/login']).then();
  }

  getAllGames() {
    this.gamesApiService.getAllGames().subscribe((response: any = []) => {});
  }
  ngOnInit() {
    this.getAllGames();
  }
}
