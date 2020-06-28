import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../service/people.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'agl-raw-response',
  templateUrl: './raw-response.component.html',
  styleUrls: ['./raw-response.component.scss'],
})
export class RawResponseComponent implements OnInit {
  people$: Observable<string> = null;

  constructor(private readonly peopleService: PeopleService) {}

  ngOnInit(): void {
    console.log('init raw');
    this.people$ = this.peopleService.getPeople().pipe(map((response) => JSON.stringify(response, null, 2)));
  }
}
