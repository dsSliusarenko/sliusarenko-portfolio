import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {EmailBody} from "./email";
import {Observable} from "rxjs";
import {personalInformation} from "../personal-information";

@Injectable({
  providedIn: "root"
})
export class EmailService {
  private static listUrl = () => personalInformation.emailUrl;

  constructor(private httpClient: HttpClient) {
  }

  sendMail(emailBody: EmailBody): Observable<Response> {
    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post<Response>(EmailService.listUrl(), emailBody, {'headers': headers})
  }
}
