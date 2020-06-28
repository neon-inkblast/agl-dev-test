import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PeopleService } from './people.service';

describe('PeopleService', () => {
  let service: PeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPeople()', () => {
    it('should request data from an external json resource', () => {
      const httpMock = TestBed.inject(HttpTestingController);
      const subscriber = jasmine.createSpyObj(['next']);
      const response = PeopleResponseMock();
      service.getPeople().subscribe(subscriber);

      const testRequest = httpMock.expectOne(service.API_URL);
      testRequest.flush(response);

      expect(testRequest.request.method).toBe('GET');
      expect(subscriber.next).toHaveBeenCalledWith(response);
    });

    it('should handle errors and return an empty array', () => {
      const httpMock = TestBed.inject(HttpTestingController);
      const subscriber = jasmine.createSpyObj(['next']);
      const response = PeopleResponseMock();
      service.getPeople().subscribe(subscriber);

      const testRequest = httpMock.expectOne(service.API_URL);
      testRequest.flush(null, { status: 400, statusText: 'Bad Request' });

      expect(testRequest.request.method).toBe('GET');
      expect(subscriber.next).toHaveBeenCalledWith([]);
    });
  });

  describe('transformResponse()', () => {
    it('should transform a sample API request to gender mapped cat names', () => {
      const result = service.transformResponse(PeopleResponseMock());
      expect(result).toEqual({
        male: ['Garfield', 'Tom', 'Max', 'Jim'],
        female: ['Garfield', 'Tabby', 'Simba'],
      });
    });

    it('should handle empty array input', () => {
      const result = service.transformResponse([]);
      expect(result).toEqual({
        male: [],
        female: [],
      });
    });

    it('should handle null input', () => {
      const result = service.transformResponse(null);
      expect(result).toEqual({
        male: [],
        female: [],
      });
    });

    it('should handle an all female response', () => {
      const mock = PeopleResponseMock().filter((person) => person.gender === 'Female');
      const result = service.transformResponse(mock);
      expect(result).toEqual({
        male: [],
        female: ['Garfield', 'Tabby', 'Simba'],
      });
    });

    it('should handle an all male response', () => {
      const mock = PeopleResponseMock().filter((person) => person.gender === 'Male');
      const result = service.transformResponse(mock);
      expect(result).toEqual({
        male: ['Garfield', 'Tom', 'Max', 'Jim'],
        female: [],
      });
    });

    it('should handle a response with all "gender" attributes missing', () => {
      const mock = PeopleResponseMock().map((person) => {
        return { ...person, gender: null };
      });
      const result = service.transformResponse(mock);
      expect(result).toEqual({
        male: [],
        female: [],
      });
    });

    it('should handle a response with all "pets" attributes missing', () => {
      const mock = PeopleResponseMock().map((person) => {
        return { ...person, pets: null };
      });
      const result = service.transformResponse(mock);
      expect(result).toEqual({
        male: [],
        female: [],
      });
    });
  });
});

export const PeopleResponseMock = () => [
  {
    name: 'Bob',
    gender: 'Male',
    age: 23,
    pets: [
      {
        name: 'Garfield',
        type: 'Cat',
      },
      {
        name: 'Fido',
        type: 'Dog',
      },
    ],
  },
  {
    name: 'Jennifer',
    gender: 'Female',
    age: 18,
    pets: [
      {
        name: 'Garfield',
        type: 'Cat',
      },
    ],
  },
  {
    name: 'Steve',
    gender: 'Male',
    age: 45,
    pets: null,
  },
  {
    name: 'Fred',
    gender: 'Male',
    age: 40,
    pets: [
      {
        name: 'Tom',
        type: 'Cat',
      },
      {
        name: 'Max',
        type: 'Cat',
      },
      {
        name: 'Sam',
        type: 'Dog',
      },
      {
        name: 'Jim',
        type: 'Cat',
      },
    ],
  },
  {
    name: 'Samantha',
    gender: 'Female',
    age: 40,
    pets: [
      {
        name: 'Tabby',
        type: 'Cat',
      },
    ],
  },
  {
    name: 'Alice',
    gender: 'Female',
    age: 64,
    pets: [
      {
        name: 'Simba',
        type: 'Cat',
      },
      {
        name: 'Nemo',
        type: 'Fish',
      },
    ],
  },
];
