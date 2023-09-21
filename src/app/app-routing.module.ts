import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const ngaRoutes: Routes = [
  {
    path: '',
    redirectTo: 'overview/map',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ngaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
