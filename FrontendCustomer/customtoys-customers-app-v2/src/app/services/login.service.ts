import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {map, tap, catchError} from 'rxjs/operators';
import {User} from "../classes/user";
import {Apiconfig} from "../classes/apiconfig";

// import { Response } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private WEB_API_URL: string;

  constructor(private httpClient: HttpClient) {
    this.WEB_API_URL = Apiconfig.getProtocol() + Apiconfig.getIP() + '' + Apiconfig.getPort() + '/api/login/customer';
  }

  login(username: string, password: string): Observable<HttpResponse<User>> {
    const body = {
      'username': username,
      'password': password
    };
    // const httpOptions = {
    //   headers: null,
    //   observe: 'response'
    // };

    return this.httpClient.post<User>(this.WEB_API_URL, body,  {headers: null, observe: 'response'})
      .pipe(
         tap(data => console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)))
        // catchError(this.handleError)
      );
  }


  private handleError(error: HttpResponse<string>) {
    console.error(error);
    // return throwError(error.json().error || 'Server error');
  }
}