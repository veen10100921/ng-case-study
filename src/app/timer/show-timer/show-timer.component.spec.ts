import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTimerComponent } from './show-timer.component';

describe('ShowTimerComponent', () => {
  let component: ShowTimerComponent;
  let fixture: ComponentFixture<ShowTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
