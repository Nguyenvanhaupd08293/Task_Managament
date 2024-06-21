import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatOfficerComponent } from './creat-officer.component';

describe('CreatOfficerComponent', () => {
  let component: CreatOfficerComponent;
  let fixture: ComponentFixture<CreatOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatOfficerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
