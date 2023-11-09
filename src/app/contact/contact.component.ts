import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {REFERENCES} from "./references";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmailService} from "../services/email.service";
import {EmailBody} from "../services/email";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "../ui/snack-bar/snack-bar.component";

@Component({
  selector: 'sds-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  mailForm: FormGroup = this.formBuilder.group({});

  protected readonly environment = environment;
  protected readonly REFERENCES = REFERENCES;

  constructor(private formBuilder: FormBuilder, private emailService: EmailService, private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.mailForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    })
  }

  sendMessage(): void {
    if (this.mailForm.valid) {

      const emailBody: EmailBody = {
        name: this.mailForm.get('name')?.value,
        replyto: this.mailForm.get('email')?.value,
        message: {
          subject: this.mailForm.get('subject')?.value,
          message: this.mailForm.get('message')?.value,
        }
      }

      this.emailService.sendMail(emailBody).subscribe((response: Response) => {
        if (response.ok) {
          this.openSnackBar();
        }
      })
    }
  }

  openSnackBar() {
    const durationInSeconds: number = 5
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: durationInSeconds * 1000,
    });
  }
}
