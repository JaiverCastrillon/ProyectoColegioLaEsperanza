import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreListComponent } from './padre-list.component';

describe('PadreListComponent', () => {
  let component: PadreListComponent;
  let fixture: ComponentFixture<PadreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
