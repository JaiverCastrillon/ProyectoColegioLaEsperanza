import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreNewComponent } from './padre-new.component';

describe('PadreNewComponent', () => {
  let component: PadreNewComponent;
  let fixture: ComponentFixture<PadreNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
