import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SLogComponent } from './s-log.component';

describe('SLogComponent', () => {
  let component: SLogComponent;
  let fixture: ComponentFixture<SLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
