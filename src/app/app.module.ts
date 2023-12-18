import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SideBarModule} from "./components/side-bar/side-bar.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {PortfolioModule} from "./components/portfolio/portfolio.module";
import {AngularMaterialModule} from "./ui/angular-material/angular-material.module";
import {AppRoutingModule} from "./app-routing.module";
import {ResumeModule} from "./components/resume/resume.module";
import {ToolsModule} from "./components/tools/tools.module";
import {ContactModule} from "./components/contact/contact.module";
import {HeroComponent} from "./components/hero/hero.component";
import {AboutComponent} from "./components/about/about.component";
import {IconModule} from "./ui/icon/icon.module";
import {NgOptimizedImage} from "@angular/common";
import {CountUpModule} from "ngx-countup";
import {ServicesModule} from "./components/services/services.module";
import {MobileMenuComponent} from './ui/mobile-menu-toggle/mobile-menu.component';
import {NavigationModule} from "./ui/navigation/navigation.module";

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    MobileMenuComponent,
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
    CountUpModule,
    ServicesModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
