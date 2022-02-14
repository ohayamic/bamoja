import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideResolutionComponent } from './slide-resolution.component';

describe('SlideResolutionComponent', () => {
  let component: SlideResolutionComponent;
  let fixture: ComponentFixture<SlideResolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideResolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
