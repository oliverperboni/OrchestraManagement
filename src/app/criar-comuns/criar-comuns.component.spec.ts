import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarComunsComponent } from './criar-comuns.component';

describe('CriarComunsComponent', () => {
  let component: CriarComunsComponent;
  let fixture: ComponentFixture<CriarComunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CriarComunsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarComunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
