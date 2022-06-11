import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChartDynamicComponent } from './app-chart-dynamic.component';

describe('AppChartDynamicComponent', () => {
  let component: AppChartDynamicComponent;
  let fixture: ComponentFixture<AppChartDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppChartDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppChartDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
