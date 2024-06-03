import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunsComponent } from './comuns.component';

describe('ComunsComponent', () => {
  let component: ComunsComponent;
  let fixture: ComponentFixture<ComunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComunsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
