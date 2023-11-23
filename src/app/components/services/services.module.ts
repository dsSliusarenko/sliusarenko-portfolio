import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import {MatIconModule} from "@angular/material/icon";
import {ToolsModule} from "../tools/tools.module";



@NgModule({
    declarations: [
        ServicesComponent
    ],
    exports: [
        ServicesComponent
    ],
  imports: [
    CommonModule,
    MatIconModule,
    ToolsModule
  ]
})
export class ServicesModule { }
