import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CvComponent} from './cv/cv.component';
import {EmbaucheListComponent} from './embauche-list/embauche-list.component';
import {CvDetailsComponent} from './cv-details/cv-details.component';

const routes: Routes = [
  {
    path: '',
    component: CvComponent,
  },
  {
    path: 'cv/list',
    component: CvComponent,
  },
  {
    path: 'embauche/list',
    component: EmbaucheListComponent,
  },
  {
    path: 'cv/detail/:id',
    component: CvDetailsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
