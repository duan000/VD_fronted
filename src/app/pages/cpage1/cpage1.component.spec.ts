import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cpage1Component } from './cpage1.component';

describe('Cpage1Component', () => {
  let component: Cpage1Component;
  let fixture: ComponentFixture<Cpage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cpage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
