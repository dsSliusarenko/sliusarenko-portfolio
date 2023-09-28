import {NgModule} from "@angular/core";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AngularMaterialModule {

}
