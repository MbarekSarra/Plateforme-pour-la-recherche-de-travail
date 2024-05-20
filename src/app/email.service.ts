import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private firebaseFunctionUrl = 'https://your-firebase-function-url/sendEmail';

  constructor(private http: HttpClient) {}

  sendEmail(to: string, message: string): Observable<any> {
    const emailData = {
      to: to,
      message: message
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.firebaseFunctionUrl, emailData, { headers: headers });
  }
}
