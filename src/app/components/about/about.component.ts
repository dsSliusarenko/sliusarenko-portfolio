import {Component} from '@angular/core';
import {environment} from "../../../environments/environment";
import {DETAILS, PersonalDetail} from "./personal-details";
import {Fact, FACTS} from "./facts";

@Component({
  selector: 'sds-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  protected readonly environment = environment;
  protected readonly DETAILS: PersonalDetail[] = DETAILS;
  protected readonly FACTS: Fact[] = FACTS;
}
