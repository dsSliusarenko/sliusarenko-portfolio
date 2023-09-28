import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {REFERENCES} from "./references";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'sds-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  mailForm: FormGroup = this.formBuilder.group({});

  protected readonly environment = environment;
  protected readonly REFERENCES = REFERENCES;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.mailForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      subject: [null, Validators.required],
      message: [null, Validators.required],
    })
  }

  sendMessage(): void {

  }
}
