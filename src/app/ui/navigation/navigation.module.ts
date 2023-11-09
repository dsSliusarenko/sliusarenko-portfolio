import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './navigation.component';
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {IconModule} from "../icon/icon.module";
import {RouterLink, RouterLinkActive} from "@angular/router";

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
    IconModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class NavigationModule {
}
