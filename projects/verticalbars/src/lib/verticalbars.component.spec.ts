import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalbarsComponent } from './verticalbars.component';

describe('VerticalbarsComponent', () => {
  let component: VerticalbarsComponent;
  let fixture: ComponentFixture<VerticalbarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalbarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
