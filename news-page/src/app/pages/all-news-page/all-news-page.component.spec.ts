import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNewsPageComponent } from './all-news-page.component';

describe('AllNewsPageComponent', () => {
  let component: AllNewsPageComponent;
  let fixture: ComponentFixture<AllNewsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllNewsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllNewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
