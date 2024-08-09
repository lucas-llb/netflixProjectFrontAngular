import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestCategoryComponent } from './newest-category.component';

describe('NewestCategoryComponent', () => {
  let component: NewestCategoryComponent;
  let fixture: ComponentFixture<NewestCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewestCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewestCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
