import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ResumeComponent} from './resume.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    ResumeComponent
  ],
  exports: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    NgOptimizedImage
  ]
})
export class ResumeModule {
}
