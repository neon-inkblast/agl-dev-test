import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawResponseComponent } from './raw-response.component';

describe('RawResponseComponent', () => {
  let component: RawResponseComponent;
  let fixture: ComponentFixture<RawResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RawResponseComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
