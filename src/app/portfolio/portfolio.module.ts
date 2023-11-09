import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import {AngularMaterialModule} from "../ui/angular-material/angular-material.module";

@NgModule({
    declarations: [
        PortfolioComponent
    ],
    exports: [
        PortfolioComponent
    ],
    imports: [
        CommonModule,
      AngularMaterialModule
    ]
})
export class PortfolioModule { }
