import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {catchError, tap} from "rxjs/operators";
import {Apiconfig} from "../classes/apiconfig";

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  private WEB_API_URL: string;

  constructor(private httpClient: HttpClient) {
    this.WEB_API_URL = Apiconfig.getProtocol() + Apiconfig.getIP() + ':' + Apiconfig.getPort() + '/api/CustomerLogout';
  }

  logout(token: string): Observable<HttpResponse<any>> {
    const myHeaders= new HttpHeaders({
      'Token':  token
    });

    const httpOptions = {
      headers:myHeaders,
      observe:'response'
    };

    return this.httpClient.post(this.WEB_API_URL, null,  {headers: myHeaders, observe: 'response'})
      .pipe(
        tap(data => console.log('El usuario se deslogeo'))//,
        //catchError(this.handleError))
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
  }
}