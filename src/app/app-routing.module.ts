import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";

const ngaRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
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
