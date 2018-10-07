import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {map, tap, catchError} from 'rxjs/operators';
import {User} from "../classes/user";
import {Client} from "../classes/client";
import {Apiconfig} from "../classes/apiconfig";
import {StorageService} from "./storage.service";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private WEB_API_URL: string;

  constructor(private httpClient: HttpClient, private storageService: StorageService) {
    this.WEB_API_URL = Apiconfig.getProtocol() +  Apiconfig.getIP() + Apiconfig.getPort() + '/api/clients';
  }

  get(): Observable<HttpResponse<Client>> {
    const myHeaders= new HttpHeaders({
      'Token': this.storageService.getCurrentToken()
    });
    const httpOptions = {
      headers:myHeaders,
      observe:'response'
    };
    
    const url = `${this.WEB_API_URL}/${this.storageService.getCurrentUser().id_client}`;

    return this.httpClient.get<Client>(url,  {headers: myHeaders, observe: 'response'})
      .pipe(
         tap(data => console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)))
      );
  }

  put(client: Client): Observable<HttpResponse<Client>> {
    const myHeaders= new HttpHeaders({
      'Token': this.storageService.getCurrentToken()
    });
    const httpOptions = {
      headers:myHeaders,
      observe:'response'
    };
    
    const url = `${this.WEB_API_URL}/${client._id}`;
    console.log(url);
    return this.httpClient.put<Client>(url, client,  {headers: myHeaders, observe: 'response'})
      .pipe(
         tap(data => console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)))
      );
  }

  private handleError(error: HttpResponse<string>) {
    console.error(error);
  }
}