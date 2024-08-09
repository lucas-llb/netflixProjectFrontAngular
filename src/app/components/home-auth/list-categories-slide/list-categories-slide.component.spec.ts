import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoriesSlideComponent } from './list-categories-slide.component';

describe('ListCategoriesSlideComponent', () => {
  let component: ListCategoriesSlideComponent;
  let fixture: ComponentFixture<ListCategoriesSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCategoriesSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCategoriesSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
