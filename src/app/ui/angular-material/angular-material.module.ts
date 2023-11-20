import {NgModule} from "@angular/core";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@NgModule({
  imports: [
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonToggleModule
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonToggleModule
  ]
})
export class AngularMaterialModule {

}
