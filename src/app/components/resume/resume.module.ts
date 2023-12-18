import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ResumeComponent} from './resume.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    NgOptimizedImage
  ],
  exports: [
    ResumeComponent
  ]
})
export class ResumeModule {
}
