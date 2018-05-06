import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreDetailsComponent } from './padre-details.component';

describe('PadreDetailsComponent', () => {
  let component: PadreDetailsComponent;
  let fixture: ComponentFixture<PadreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
