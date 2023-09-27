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
    matIconRegistry.addSvgIcon(
      'angular',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-angular.svg'),
    );
    matIconRegistry.addSvgIcon(
      'nestjs',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-nestjs.svg'),
    );
    matIconRegistry.addSvgIcon(
      'react',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-react.svg'),
    );
    matIconRegistry.addSvgIcon(
      'typescript',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-typescript.svg'),
    );
    matIconRegistry.addSvgIcon(
      'javascript',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-javascript.svg'),
    );
    matIconRegistry.addSvgIcon(
      'css',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-css.svg'),
    );
    matIconRegistry.addSvgIcon(
      'html',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-html.svg'),
    );
    matIconRegistry.addSvgIcon(
      'java',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-java.svg'),
    );
    matIconRegistry.addSvgIcon(
      'material',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-material.svg'),
    );
    matIconRegistry.addSvgIcon(
      'bootstrap',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-bootstrap.svg'),
    );
    matIconRegistry.addSvgIcon(
      'primeng',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-primeng.svg'),
    );
  }
}
