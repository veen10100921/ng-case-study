import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomCatComponent } from './ecom-cat.component';

describe('EcomCatComponent', () => {
  let component: EcomCatComponent;
  let fixture: ComponentFixture<EcomCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcomCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
