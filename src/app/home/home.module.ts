import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HomeComponent} from './home.component';
import {PortfolioModule} from "./portfolio/portfolio.module";
import {SideBarModule} from "../side-bar/side-bar.module";
import {ResumeModule} from "./resume/resume.module";
import {HeroComponent} from "./hero/hero.component";
import {ToolsModule} from "./tools/tools.module";
import {ContactModule} from "./contact/contact.module";
import {AboutComponent} from './about/about.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AboutComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PortfolioModule,
    SideBarModule,
    ResumeModule,
    ToolsModule,
    ContactModule,
    MatIconModule,
    NgOptimizedImage
  ]
})
export class HomeModule {
}
