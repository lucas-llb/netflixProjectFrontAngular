import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationSectionComponent } from './presentation-section.component';

describe('PresentationSectionComponent', () => {
  let component: PresentationSectionComponent;
  let fixture: ComponentFixture<PresentationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
