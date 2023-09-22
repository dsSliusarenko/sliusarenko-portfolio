import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {SideBarComponent} from "./side-bar.component";
import {AngularMaterialModule} from "../ui/angular-material/angular-material.module";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {IconModule} from "../ui/icon/icon.module";
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    SideBarComponent,
    HeroComponent
  ],
  exports: [
    SideBarComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterLink,
    RouterLinkActive,
    IconModule,
    NgOptimizedImage
  ]
})
export class SideBarModule {
}
