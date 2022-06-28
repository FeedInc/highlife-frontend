import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentCardInGameComponent } from './tournament-card-in-game.component';

describe('TournamentCardInGameComponent', () => {
  let component: TournamentCardInGameComponent;
  let fixture: ComponentFixture<TournamentCardInGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentCardInGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentCardInGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
