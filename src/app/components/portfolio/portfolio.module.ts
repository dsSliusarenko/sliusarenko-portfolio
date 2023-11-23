import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {PortfolioComponent} from './portfolio.component';
import {AngularMaterialModule} from "../../ui/angular-material/angular-material.module";
import {MatIconModule} from "@angular/material/icon";
import {CarouselModule} from "../../ui/carousel/carousel.module";

@NgModule({
  declarations: [
    PortfolioComponent
  ],
  exports: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NgOptimizedImage,
    MatIconModule,
    CarouselModule
  ]
})
export class PortfolioModule {
}
