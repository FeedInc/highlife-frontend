import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryCardComponent } from './advisory-card.component';

describe('AdvisoryCardComponent', () => {
  let component: AdvisoryCardComponent;
  let fixture: ComponentFixture<AdvisoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvisoryCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvisoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
