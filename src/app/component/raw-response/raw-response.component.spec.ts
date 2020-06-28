import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawResponseComponent } from './raw-response.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RawResponseComponent', () => {
  let component: RawResponseComponent;
  let fixture: ComponentFixture<RawResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RawResponseComponent],
      imports: [HttpClientTestingModule],
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
