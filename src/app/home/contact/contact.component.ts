import { Component } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'sds-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  protected readonly environment = environment;
}
