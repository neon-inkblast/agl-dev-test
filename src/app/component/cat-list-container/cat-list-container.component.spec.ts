import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CatListContainerComponent } from './cat-list-container.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { PeopleResponseMock } from 'src/app/service/people.service.spec';
import { PeopleService } from 'src/app/service/people.service';
import { CatListComponent } from '../cat-list/cat-list.component';

describe('CatListContainerComponent', () => {
  let component: CatListContainerComponent;
  let fixture: ComponentFixture<CatListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CatListContainerComponent, CatListComponent],
      imports: [HttpClientTestingModule],
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

  it('should show loading text while waiting for the API request to resolve', () => {
    const container = fixture.debugElement.queryAll(By.css('div'))[0];
    const test = container.nativeElement.textContent;
    expect(test).toBe('Loading...');
  });

  it('should show male/female headers after API request resolves', () => {
    const httpMock = TestBed.inject(HttpTestingController);
    const response = PeopleResponseMock();
    const testRequest = httpMock.expectOne(PeopleService.API_URL);
    testRequest.flush(response);
    fixture.detectChanges();
    const titles = fixture.debugElement.queryAll(By.css('.gender-title'));
    const male = titles[0].nativeElement.textContent;
    const female = titles[1].nativeElement.textContent;
    expect(male).toBe('male');
    expect(female).toBe('female');
  });
});
