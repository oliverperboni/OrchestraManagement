import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMusicoComponent } from './form-musico.component';

describe('FormMusicoComponent', () => {
  let component: FormMusicoComponent;
  let fixture: ComponentFixture<FormMusicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormMusicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormMusicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
