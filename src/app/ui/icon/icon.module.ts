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
    matIconRegistry.addSvgIcon(
      'github',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-github.svg'),
    );
    matIconRegistry.addSvgIcon(
      'linkedin',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-linkedin.svg'),
    );
    matIconRegistry.addSvgIcon(
      'instagram',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-instagram.svg'),
    );
    matIconRegistry.addSvgIcon(
      'discord',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-discord.svg'),
    );
    matIconRegistry.addSvgIcon(
      'mail',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-mail.svg'),
    );
    matIconRegistry.addSvgIcon(
      'portfolio',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-portfolio.svg'),
    );
    matIconRegistry.addSvgIcon(
      'person',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-person.svg'),
    );
    matIconRegistry.addSvgIcon(
      'tools',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-tools.svg'),
    );
    matIconRegistry.addSvgIcon(
      'mail-forward',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-mail-forward.svg'),
    );
  }
}
