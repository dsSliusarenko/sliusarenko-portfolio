import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolsComponent} from './tools.component';
import {AngularMaterialModule} from "../ui/angular-material/angular-material.module";
import {ToolsListComponent} from './tools-list/tools-list.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    ToolsComponent,
    ToolsListComponent
  ],
  exports: [
    ToolsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    MatIconModule
  ]
})
export class ToolsModule {
}
