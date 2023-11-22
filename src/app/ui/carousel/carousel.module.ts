import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { CarouselComponent } from './carousel.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    NgOptimizedImage
  ],
  exports: [
    CarouselComponent
  ]
})
export class CarouselModule { }
