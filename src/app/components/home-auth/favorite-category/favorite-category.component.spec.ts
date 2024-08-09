import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCategoryComponent } from './favorite-category.component';

describe('FavoriteCategoryComponent', () => {
  let component: FavoriteCategoryComponent;
  let fixture: ComponentFixture<FavoriteCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
