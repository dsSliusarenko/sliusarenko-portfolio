import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SideBarModule} from "./side-bar/side-bar.module";
import {HomeModule} from "./home/home.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {PortfolioModule} from "./side-bar/portfolio/portfolio.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        HomeModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        SideBarModule,
        PortfolioModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
