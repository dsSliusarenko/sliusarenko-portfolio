import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {CarouselComponent} from './carousel.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {AngularMaterialModule} from "../angular-material/angular-material.module";

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    MatChipsModule,
    MatIconModule,
    NgOptimizedImage
  ],
  exports: [
    CarouselComponent
  ]
})
export class CarouselModule {
}
