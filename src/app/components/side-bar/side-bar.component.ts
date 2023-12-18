import {Component} from '@angular/core';
import {personalInformation} from "../../personal-information";

@Component({
  selector: 'sds-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  protected readonly personalInformation = personalInformation;
}
