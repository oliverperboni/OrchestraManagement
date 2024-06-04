import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarMusicoComponent } from './criar-musico.component';

describe('CriarMusicoComponent', () => {
  let component: CriarMusicoComponent;
  let fixture: ComponentFixture<CriarMusicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CriarMusicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarMusicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
