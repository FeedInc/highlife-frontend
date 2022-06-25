import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryDialogComponent } from './advisory-dialog.component';

describe('AdvisoryDialogComponent', () => {
  let component: AdvisoryDialogComponent;
  let fixture: ComponentFixture<AdvisoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvisoryDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvisoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
