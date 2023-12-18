import {Component} from '@angular/core';
import {personalInformation} from "../../personal-information";

@Component({
  selector: 'sds-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  protected readonly personalInformation = personalInformation;
}
