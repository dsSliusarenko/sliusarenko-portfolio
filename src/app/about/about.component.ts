import { Component } from '@angular/core';
import {environment} from "../../environments/environment";
import {DETAILS} from "./personal-details";

@Component({
  selector: 'sds-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  protected readonly environment = environment;
  protected readonly DETAILS = DETAILS;
}
