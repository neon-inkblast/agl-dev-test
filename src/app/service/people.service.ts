import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PeopleResponse } from '../model/api-request';
import { CatList } from '../model/cat-list';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  API_URL = 'http://agl-developer-test.azurewebsites.net/people.json';
  constructor(private readonly http: HttpClient) {}

  getPeople(): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>(this.API_URL).pipe(
      catchError((error) => {
        console.error('error fetching people.json');
        console.error(error);
        return of([]);
      })
    );
  }

  transformResponse(response: PeopleResponse): CatList {
    const initialList = { male: [], female: [] };
    // check for null and undefined input
    if (response == null) {
      return initialList;
    }

    // reduce the person array to a map of cat names keyed on person gender
    return response.reduce((prev: CatList, person) => {
      // make sure the person has assigned gender and pets exists for that person
      if (person.gender != null && person.pets != null) {
        const gender = person.gender.toLowerCase();
        const currentNames = prev[gender];
        // filter out people without cats, then map the array to the cat names
        const newNames = person.pets.filter((pet) => pet.type === 'Cat').map((pet) => pet.name);
        // combine the existing array with the new names for this person and overwrite the previous array
        prev[gender] = currentNames.concat(newNames);
      }
      return prev;
    }, initialList);
  }
}
