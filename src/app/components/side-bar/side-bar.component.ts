import {Component} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'sds-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  protected readonly environment = environment;
}
