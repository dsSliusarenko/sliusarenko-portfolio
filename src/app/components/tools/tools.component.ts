import {Component} from '@angular/core';
import {ListType} from "./tools";
import {personalInformation} from "../../personal-information";

@Component({
  selector: 'sds-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
  protected readonly ListType = ListType;
  protected readonly personalInformation = personalInformation;
}
