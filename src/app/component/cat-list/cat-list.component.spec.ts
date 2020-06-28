import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CatListComponent } from './cat-list.component';
import { By } from '@angular/platform-browser';

describe('CatListComponent', () => {
  let component: CatListComponent;
  let fixture: ComponentFixture<CatListComponent>;
  const testCats = ['Jim', 'Bob'];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CatListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the cat names in list elements', () => {
    component.cats = [...testCats];
    fixture.detectChanges();
    const listDebugElements = fixture.debugElement.queryAll(By.css('li'));
    const cat1 = listDebugElements[0].nativeElement.textContent;
    const cat2 = listDebugElements[1].nativeElement.textContent;
    expect(cat1).toBe('Jim');
    expect(cat2).toBe('Bob');
  });
});
