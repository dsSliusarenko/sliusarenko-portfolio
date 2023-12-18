import {Component} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Service, SERVICES} from "./services";

@Component({
  selector: 'sds-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  protected readonly environment = environment;
  protected readonly SERVICES: Service[] = SERVICES;
}
