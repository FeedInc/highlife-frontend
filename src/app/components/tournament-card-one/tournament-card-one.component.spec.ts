import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentCardOneComponent } from './tournament-card-one.component';

describe('TournamentCardOneComponent', () => {
  let component: TournamentCardOneComponent;
  let fixture: ComponentFixture<TournamentCardOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentCardOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TournamentCardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
