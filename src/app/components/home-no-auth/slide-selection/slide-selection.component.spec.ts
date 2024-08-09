import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSelectionComponent } from './slide-selection.component';

describe('SlideSelectionComponent', () => {
  let component: SlideSelectionComponent;
  let fixture: ComponentFixture<SlideSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
