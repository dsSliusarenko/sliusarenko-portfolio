import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@NgModule({
  imports: [
    MatIconModule,
    CommonModule
  ],
  exports: [
    MatIconModule
  ]
})
export class IconModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIcon(
      'file',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-file.svg'),
    );
  }
}
