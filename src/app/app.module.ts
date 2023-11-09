import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SideBarModule} from "./side-bar/side-bar.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {PortfolioModule} from "./portfolio/portfolio.module";
import {AngularMaterialModule} from "./ui/angular-material/angular-material.module";
import {AppRoutingModule} from "./app-routing.module";
import {ResumeModule} from "./resume/resume.module";
import {ToolsModule} from "./tools/tools.module";
import {ContactModule} from "./contact/contact.module";
import {HeroComponent} from "./hero/hero.component";
import {AboutComponent} from "./about/about.component";
import {IconModule} from "./ui/icon/icon.module";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    AppRoutingModule,
    IconModule,
    SideBarModule,
    PortfolioModule,
    ResumeModule,
    ToolsModule,
    ContactModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
