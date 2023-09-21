import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideBarComponent} from "./side-bar.component";
import {AngularMaterialModule} from "../ui/angular-material/angular-material.module";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {IconModule} from "../ui/icon/icon.module";

@NgModule({
  declarations: [
    SideBarComponent
  ],
  exports: [
    SideBarComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterLink,
    RouterLinkActive,
    IconModule
  ]
})
export class SideBarModule {
}
