import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {map, tap, catchError} from 'rxjs/operators';
import {Project} from "../classes/project";
import {Comment} from "../classes/comment";
import {Apiconfig} from "../classes/apiconfig";
import {StorageService} from "./storage.service";


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private WEB_API_URL_PROJECTS: string;
  private WEB_API_URL_CLIENTS: string;

  constructor(private httpClient: HttpClient, private storageService: StorageService) {
    this.WEB_API_URL_PROJECTS = Apiconfig.getProtocol() + Apiconfig.getIP() + '' + Apiconfig.getPort() + '/api/projects';
    this.WEB_API_URL_CLIENTS = Apiconfig.getProtocol() + Apiconfig.getIP() + '' + Apiconfig.getPort() + '/api/clients';
  }

  getProject(id_project: string): Observable<HttpResponse< Project>> {
    const myHeaders= new HttpHeaders({
      'Token': this.storageService.getCurrentToken()
    });
    const httpOptions = {
      headers:myHeaders,
      observe:'response'
    };
    
    const url = `${this.WEB_API_URL_PROJECTS}/${id_project}`;

    return this.httpClient.get<Project>(url,  {headers: myHeaders, observe: 'response'})
      .pipe(
         tap(data => console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)))
      );
  }

  getProjectsOfClient(): Observable<HttpResponse< Array<Project>>> {
    const myHeaders= new HttpHeaders({
      'Token': this.storageService.getCurrentToken()
    });
    const httpOptions = {
      headers:myHeaders,
      observe:'response'
    };
    
    const url = `${this.WEB_API_URL_CLIENTS}/${this.storageService.getCurrentUser().id_client}/projects`;

    return this.httpClient.get< Array<Project>>(url,  {headers: myHeaders, observe: 'response'})
      .pipe(
         tap(data => console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)))
      );
  }

  getCommentsProject(id_project: string): Observable<HttpResponse<Array<Comment>>> {
    const myHeaders= new HttpHeaders({
      'Token': this.storageService.getCurrentToken()
    });
    const httpOptions = {
      headers:myHeaders,
      observe:'response'
    };
    
    const url = `${this.WEB_API_URL_PROJECTS}/${id_project}/Comments`;
    
    return this.httpClient.get<Array<Comment>>(url,  {headers: myHeaders, observe: 'response'})
      .pipe(
         tap(data => console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)))
      );
  }

  postCoommentProject(id_project: string, text: string): Observable<HttpResponse<Comment>> {
    const myHeaders= new HttpHeaders({
      'Token': this.storageService.getCurrentToken()
    });
    const httpOptions = {
      headers:myHeaders,
      observe:'response'
    };
    
    const url = `${this.WEB_API_URL_PROJECTS}/${id_project}/Comments`;
    
    let comment = new Comment();
    comment.text = text;
    comment.id_project = id_project;

    return this.httpClient.post<Comment>(url, comment,  {headers: myHeaders, observe: 'response'})
      .pipe(
         tap(data => console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)))
      );
  }

  private handleError(error: HttpResponse<string>) {
    console.error(error);
  }
}