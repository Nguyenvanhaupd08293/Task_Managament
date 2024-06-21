import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeASSComponent } from './home-ass.component';

describe('HomeASSComponent', () => {
  let component: HomeASSComponent;
  let fixture: ComponentFixture<HomeASSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeASSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeASSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
