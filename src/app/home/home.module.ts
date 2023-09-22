import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {PortfolioModule} from "../side-bar/portfolio/portfolio.module";
import {SideBarModule} from "../side-bar/side-bar.module";



@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
  imports: [
    CommonModule,
    PortfolioModule,
    SideBarModule
  ]
})
export class HomeModule { }
