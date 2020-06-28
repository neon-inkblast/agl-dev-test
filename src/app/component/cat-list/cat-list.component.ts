import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'agl-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss'],
})
export class CatListComponent {
  @Input()
  cats: string[] = [];

  constructor() {}
}
