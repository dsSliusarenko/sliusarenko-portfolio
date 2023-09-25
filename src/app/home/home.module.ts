import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {PortfolioModule} from "./portfolio/portfolio.module";
import {SideBarModule} from "../side-bar/side-bar.module";
import {ResumeModule} from "./resume/resume.module";
import {HeroComponent} from "./hero/hero.component";

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PortfolioModule,
    SideBarModule,
    ResumeModule
  ]
})
export class HomeModule {
}
