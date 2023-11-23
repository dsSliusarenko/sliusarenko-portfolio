import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {ResumeComponent} from "./components/resume/resume.component";
import {ContactComponent} from "./components/contact/contact.component";
import {PortfolioComponent} from "./components/portfolio/portfolio.component";
import {ToolsComponent} from "./components/tools/tools.component";
import {ServicesComponent} from "./components/services/services.component";

const sdsRoutes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: AboutComponent
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
    path: 'services',
    component: ServicesComponent
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
