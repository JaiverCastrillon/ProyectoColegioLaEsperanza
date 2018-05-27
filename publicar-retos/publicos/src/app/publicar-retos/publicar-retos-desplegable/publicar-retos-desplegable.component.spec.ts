import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarRetosDesplegableComponent } from './publicar-retos-desplegable.component';

describe('PublicarRetosDesplegableComponent', () => {
  let component: PublicarRetosDesplegableComponent;
  let fixture: ComponentFixture<PublicarRetosDesplegableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarRetosDesplegableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarRetosDesplegableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
