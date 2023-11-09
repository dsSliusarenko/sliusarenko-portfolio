import {Component} from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'sds-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  protected readonly environment = environment;
}
