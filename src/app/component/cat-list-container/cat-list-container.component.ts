import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/service/people.service';
import { CatList } from 'src/app/model/cat-list';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'agl-cat-list-container',
  templateUrl: './cat-list-container.component.html',
  styleUrls: ['./cat-list-container.component.scss'],
})
export class CatListContainerComponent implements OnInit {
  catList$: Observable<CatList> = null;

  constructor(private readonly peopleService: PeopleService) {}

  ngOnInit(): void {
    console.log('init cats');
    this.catList$ = this.peopleService
      .getPeople()
      .pipe(map((response) => this.peopleService.transformResponse(response)));
  }
}
