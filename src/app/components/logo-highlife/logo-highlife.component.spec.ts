import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoHighlifeComponent } from './logo-highlife.component';

describe('LogoHighlifeComponent', () => {
  let component: LogoHighlifeComponent;
  let fixture: ComponentFixture<LogoHighlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoHighlifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoHighlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
