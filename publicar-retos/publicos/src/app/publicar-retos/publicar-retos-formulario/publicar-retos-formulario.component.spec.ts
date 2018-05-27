import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarRetosFormularioComponent } from './publicar-retos-formulario.component';

describe('PublicarRetosFormularioComponent', () => {
  let component: PublicarRetosFormularioComponent;
  let fixture: ComponentFixture<PublicarRetosFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarRetosFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarRetosFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
