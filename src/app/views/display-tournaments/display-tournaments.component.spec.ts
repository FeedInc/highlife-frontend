import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTournamentsComponent } from './display-tournaments.component';

describe('DisplayTournamentsComponent', () => {
  let component: DisplayTournamentsComponent;
  let fixture: ComponentFixture<DisplayTournamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTournamentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
