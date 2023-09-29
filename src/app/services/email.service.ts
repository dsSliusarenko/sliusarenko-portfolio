import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {EmailBody} from "./email";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EmailService {
  private static listUrl = () => environment.emailUrl;

  constructor(private httpClient: HttpClient) {
  }

  sendMail(emailBody: EmailBody): Observable<Response> {
    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post<Response>(EmailService.listUrl(), emailBody, {'headers': headers})
  }
}
