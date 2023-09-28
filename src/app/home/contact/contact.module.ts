import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";



@NgModule({
    declarations: [
        ContactComponent
    ],
    exports: [
        ContactComponent
    ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class ContactModule { }
