import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools.component';
import {AngularMaterialModule} from "../../ui/angular-material/angular-material.module";

@NgModule({
  declarations: [
    ToolsComponent
  ],
  exports: [
    ToolsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class ToolsModule { }
