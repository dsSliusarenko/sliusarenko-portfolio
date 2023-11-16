import {Component} from '@angular/core';
import {environment} from "../../environments/environment";
import {Projects} from "./projects";
import {style} from "@angular/animations";

@Component({
  selector: 'sds-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  protected readonly environment = environment;
  protected readonly Projects: Projects[] = Projects;
  protected readonly style = style;
}
