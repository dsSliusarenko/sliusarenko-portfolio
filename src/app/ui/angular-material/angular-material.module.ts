import {NgModule} from "@angular/core";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  imports: [
    MatListModule,
    MatTabsModule
  ],
  exports: [
    MatListModule,
    MatTabsModule
  ]
})
export class AngularMaterialModule {

}
