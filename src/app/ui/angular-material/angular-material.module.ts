import {NgModule} from "@angular/core";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  imports: [
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatTooltipModule
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatTooltipModule
  ]
})
export class AngularMaterialModule {

}
