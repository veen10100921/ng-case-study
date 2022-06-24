import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SGetTimeComponent } from './s-get-time.component';

describe('SGetTimeComponent', () => {
  let component: SGetTimeComponent;
  let fixture: ComponentFixture<SGetTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SGetTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SGetTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
