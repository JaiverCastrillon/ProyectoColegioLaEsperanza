import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarRetosComponent } from './publicar-retos.component';

describe('PublicarRetosComponent', () => {
  let component: PublicarRetosComponent;
  let fixture: ComponentFixture<PublicarRetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarRetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarRetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
