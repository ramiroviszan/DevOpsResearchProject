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
    this.WEB_API_URL = 'http://' + Apiconfig.getIP() + ':' + Apiconfig.getPort() + '/api/Login';
  }

  login(username: string, password: string): Observable<HttpResponse<User>> {
    const myHeaders= new HttpHeaders({
      'UserName':  username,
      'Password': password
    });
    const httpOptions = {
      headers:myHeaders,
      observe:'response'
    };

    return this.httpClient.post<User>(this.WEB_API_URL, null,  {headers: myHeaders, observe: 'response'})
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