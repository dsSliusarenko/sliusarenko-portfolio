import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./home/about/about.component";
import {ResumeComponent} from "./home/resume/resume.component";

const sdsRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home-routing.module').then((m) => m.HomeRoutingModule),
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  {
    path: 'home/about',
    component: AboutComponent
  },
  {
    path: 'home/resume',
    component: ResumeComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(sdsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
