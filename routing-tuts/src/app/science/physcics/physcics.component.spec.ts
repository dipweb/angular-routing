import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhyscicsComponent } from './physcics.component';

describe('PhyscicsComponent', () => {
  let component: PhyscicsComponent;
  let fixture: ComponentFixture<PhyscicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhyscicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhyscicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
