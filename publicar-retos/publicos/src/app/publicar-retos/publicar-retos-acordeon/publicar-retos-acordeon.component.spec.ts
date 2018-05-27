import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarRetosAcordeonComponent } from './publicar-retos-acordeon.component';

describe('PublicarRetosAcordeonComponent', () => {
  let component: PublicarRetosAcordeonComponent;
  let fixture: ComponentFixture<PublicarRetosAcordeonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarRetosAcordeonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarRetosAcordeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
