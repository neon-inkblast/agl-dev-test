import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatListComponent } from './component/cat-list/cat-list.component';
import { RawResponseComponent } from './component/raw-response/raw-response.component';

const routes: Routes = [
  { path: '', redirectTo: '/cat-list', pathMatch: 'full' },
  {
    path: 'cat-list',
    component: CatListComponent,
  },
  {
    path: 'response',
    component: RawResponseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const RoutedComponents = [CatListComponent, RawResponseComponent];
