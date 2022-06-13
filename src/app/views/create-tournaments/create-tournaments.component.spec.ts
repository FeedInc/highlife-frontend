import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTournamentsComponent } from './create-tournaments.component';

describe('TournamentsComponent', () => {
  let component: CreateTournamentsComponent;
  let fixture: ComponentFixture<CreateTournamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTournamentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
