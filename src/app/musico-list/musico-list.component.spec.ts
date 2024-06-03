import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicoListComponent } from './musico-list.component';

describe('MusicoListComponent', () => {
  let component: MusicoListComponent;
  let fixture: ComponentFixture<MusicoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
