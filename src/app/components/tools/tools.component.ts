import { Component } from '@angular/core';
import {ListType} from "./tools";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'sds-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
  protected readonly ListType = ListType;
  protected readonly environment = environment;
}
