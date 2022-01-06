import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdFrameComponent } from './vd-frame.component';

describe('VdFrameComponent', () => {
  let component: VdFrameComponent;
  let fixture: ComponentFixture<VdFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VdFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VdFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
