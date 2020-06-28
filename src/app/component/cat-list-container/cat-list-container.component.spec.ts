import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatListContainerComponent } from './cat-list-container.component';

describe('CatListContainerComponent', () => {
  let component: CatListContainerComponent;
  let fixture: ComponentFixture<CatListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CatListContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
