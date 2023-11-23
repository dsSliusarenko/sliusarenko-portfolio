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
      'home',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-home.svg'),
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
      'mail-outline',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-mail-outline.svg'),
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
      'location',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-location.svg'),
    );
    matIconRegistry.addSvgIcon(
      'phone',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-phone.svg'),
    );
    matIconRegistry.addSvgIcon(
      'priority',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-priority.svg'),
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
    matIconRegistry.addSvgIcon(
      'leaflet',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-leaflet.svg'),
    );
    matIconRegistry.addSvgIcon(
      'rxjs',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-rxjs.svg'),
    );
    matIconRegistry.addSvgIcon(
      'idea',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-idea.svg'),
    );
    matIconRegistry.addSvgIcon(
      'postman',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-postman.svg'),
    );
    matIconRegistry.addSvgIcon(
      'docker',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-docker.svg'),
    );
    matIconRegistry.addSvgIcon(
      'swagger',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-swagger.svg'),
    );
    matIconRegistry.addSvgIcon(
      'jira',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-jira.svg'),
    );
    matIconRegistry.addSvgIcon(
      'confluence',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-confluence.svg'),
    );
    matIconRegistry.addSvgIcon(
      'mongodb',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-mongodb.svg'),
    );
    matIconRegistry.addSvgIcon(
      'graphql',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-graphql.svg'),
    );
    matIconRegistry.addSvgIcon(
      'github',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-github.svg'),
    );
    matIconRegistry.addSvgIcon(
      'bitbucket',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-bitbucket.svg'),
    );
    matIconRegistry.addSvgIcon(
      'gitlab',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-gitlab.svg'),
    );
    matIconRegistry.addSvgIcon(
        'npm',
        domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-npm.svg'),
    );
    matIconRegistry.addSvgIcon(
        'oauth',
        domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-oauth.svg'),
    );
    matIconRegistry.addSvgIcon(
      'project',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-project.svg'),
    );
    matIconRegistry.addSvgIcon(
      'hourglass',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-hourglass.svg'),
    );
    matIconRegistry.addSvgIcon(
      'dvr',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-dvr.svg'),
    );
    matIconRegistry.addSvgIcon(
      'history',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-history.svg'),
    );
    matIconRegistry.addSvgIcon(
      'touch',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-touch.svg'),
    );
    matIconRegistry.addSvgIcon(
      'arrow-right',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-arrow-right.svg'),
    );
    matIconRegistry.addSvgIcon(
      'arrow-left',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-arrow-left.svg'),
    );
    matIconRegistry.addSvgIcon(
      'service',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mat-service.svg'),
    );
  }
}
