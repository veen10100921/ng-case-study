import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTimerComponent } from './get-timer.component';

describe('GetTimerComponent', () => {
  let component: GetTimerComponent;
  let fixture: ComponentFixture<GetTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
