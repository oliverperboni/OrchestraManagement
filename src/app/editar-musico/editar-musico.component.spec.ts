import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMusicoComponent } from './editar-musico.component';

describe('EditarMusicoComponent', () => {
  let component: EditarMusicoComponent;
  let fixture: ComponentFixture<EditarMusicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarMusicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarMusicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
