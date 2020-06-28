import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RawResponseComponent } from './component/raw-response/raw-response.component';
import { CatListContainerComponent } from './component/cat-list-container/cat-list-container.component';

const routes: Routes = [
  { path: '', redirectTo: '/cat-list', pathMatch: 'full' },
  {
    path: 'cat-list',
    component: CatListContainerComponent,
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

export const RoutedComponents = [CatListContainerComponent, RawResponseComponent];
