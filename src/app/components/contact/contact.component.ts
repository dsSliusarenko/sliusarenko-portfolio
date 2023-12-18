import {Component, OnInit} from '@angular/core';
import {Reference, REFERENCES} from "./references";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmailService} from "../../services/email.service";
import {EmailBody} from "../../services/email";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "../../ui/snack-bar/snack-bar.component";
import {personalInformation} from "../../personal-information";

@Component({
  selector: 'sds-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  protected readonly REFERENCES: Reference[] = REFERENCES;
  protected readonly personalInformation = personalInformation;


  mailForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder, private emailService: EmailService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
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
        replayTo: this.mailForm.get('email')?.value,
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

  openSnackBar(): void {
    const durationInSeconds: number = 5
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: durationInSeconds * 1000,
    });
  }
}
