import { Component } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'sds-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects: any[] = [{}, {}, {}]

  protected readonly environment = environment;
}
