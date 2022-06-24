import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SClickCountsComponent } from './s-click-counts.component';

describe('SClickCountsComponent', () => {
  let component: SClickCountsComponent;
  let fixture: ComponentFixture<SClickCountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SClickCountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SClickCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
