import {NgModule} from "@angular/core";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  imports: [
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class AngularMaterialModule {

}
