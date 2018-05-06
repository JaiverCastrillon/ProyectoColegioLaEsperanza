import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreEditComponent } from './padre-edit.component';

describe('PadreEditComponent', () => {
  let component: PadreEditComponent;
  let fixture: ComponentFixture<PadreEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
