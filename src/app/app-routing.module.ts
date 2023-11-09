import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {ResumeComponent} from "./resume/resume.component";

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
