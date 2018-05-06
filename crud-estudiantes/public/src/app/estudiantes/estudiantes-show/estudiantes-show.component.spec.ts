import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesShowComponent } from './estudiantes-show.component';

describe('EstudiantesShowComponent', () => {
  let component: EstudiantesShowComponent;
  let fixture: ComponentFixture<EstudiantesShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiantesShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
