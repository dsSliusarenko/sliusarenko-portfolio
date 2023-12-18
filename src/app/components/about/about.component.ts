import {Component} from '@angular/core';
import {DETAILS, PersonalDetail} from "./personal-details";
import {Fact, FACTS} from "./facts";
import {personalInformation} from "../../personal-information";

@Component({
  selector: 'sds-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  protected readonly personalInformation = personalInformation;
  protected readonly DETAILS: PersonalDetail[] = DETAILS;
  protected readonly FACTS: Fact[] = FACTS;
}
