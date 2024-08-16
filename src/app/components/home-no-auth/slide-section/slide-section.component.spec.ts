import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSectionComponent } from './slide-section.component';

describe('SlideSelectionComponent', () => {
  let component: SlideSectionComponent;
  let fixture: ComponentFixture<SlideSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
