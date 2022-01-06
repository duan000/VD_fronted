import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cpage2Component } from './cpage2.component';

describe('Cpage2Component', () => {
  let component: Cpage2Component;
  let fixture: ComponentFixture<Cpage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cpage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
