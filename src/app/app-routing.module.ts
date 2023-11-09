import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {ResumeComponent} from "./resume/resume.component";
import {ContactComponent} from "./contact/contact.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ToolsComponent} from "./tools/tools.component";

const sdsRoutes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'tools',
    component: ToolsComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'contact',
    component: ContactComponent
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
