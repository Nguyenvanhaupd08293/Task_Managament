import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOficerComponent } from './edit-oficer.component';

describe('EditOficerComponent', () => {
  let component: EditOficerComponent;
  let fixture: ComponentFixture<EditOficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditOficerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
