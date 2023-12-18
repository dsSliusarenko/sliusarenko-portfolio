import {Component} from '@angular/core';
import {Service, SERVICES} from "./services";
import {personalInformation} from "../../personal-information";

@Component({
  selector: 'sds-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  protected readonly SERVICES: Service[] = SERVICES;
  protected readonly personalInformation = personalInformation;
}
