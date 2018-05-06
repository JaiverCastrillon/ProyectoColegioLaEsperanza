import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesUpdateComponent } from './estudiantes-update.component';

describe('EstudiantesUpdateComponent', () => {
  let component: EstudiantesUpdateComponent;
  let fixture: ComponentFixture<EstudiantesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiantesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
