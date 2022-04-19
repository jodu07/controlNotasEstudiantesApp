import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudentPageComponent } from './estudent-page.component';

describe('EstudentPageComponent', () => {
  let component: EstudentPageComponent;
  let fixture: ComponentFixture<EstudentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
