import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact.component';
import {MatIconModule} from "@angular/material/icon";
import {AngularMaterialModule} from "../../ui/angular-material/angular-material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SnackBarModule} from "../../ui/snack-bar/snack-bar.module";

@NgModule({
  declarations: [
    ContactComponent
  ],
  exports: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ]
})
export class ContactModule {
}
