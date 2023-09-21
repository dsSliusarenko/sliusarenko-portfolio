import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from "./navigation.component";
import {AngularMaterialModule} from "../ui/angular-material/angular-material.module";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {IconModule} from "../ui/icon/icon.module";

@NgModule({
  declarations: [
    NavigationComponent
  ],
  exports: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterLink,
    RouterLinkActive,
    IconModule
  ]
})
export class NavigationModule {
}
