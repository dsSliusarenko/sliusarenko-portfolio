import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {SideBarComponent} from "./side-bar.component";
import {IconModule} from "../../ui/icon/icon.module";
import {NavigationModule} from "../../ui/navigation/navigation.module";

@NgModule({
  declarations: [
    SideBarComponent,
  ],
  exports: [
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    IconModule,
    NgOptimizedImage,
    NavigationModule,
  ]
})
export class SideBarModule {
}
