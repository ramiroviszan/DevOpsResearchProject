import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Subject} from "rxjs/index";
import {debounceTime} from "rxjs/operators";
import {ProjectService} from "../services/project.service";
import {Project} from "../classes/project";
import {StorageService} from "../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  pageTitle = 'Projects';
  projects: Array<Project>;

  private _subjectError = new Subject<string>();
  errorMessage: string;

  constructor(private router: Router, private projectsService : ProjectService, private storageService: StorageService) { }

  ngOnInit() {
    this._subjectError.subscribe((message) => this.errorMessage = message);
    this._subjectError.pipe(
      debounceTime(3000)
    ).subscribe(() => this.errorMessage = null);

    if(this.storageService.getCurrentClient())
      this.getProjects();
  }

  getProjects(){
    this.projectsService.getProjectsOfClient().subscribe(
      ((data : HttpResponse<Array<Project>>) => this.result(data)),
      ((error: HttpErrorResponse) => { console.error(error);this.handleError(error)})
    );
  }

  showComments(id_project){
    this.router.navigateByUrl(`/projects/${id_project}/comments`);
  }

  private result(data: HttpResponse<Array<Project>>): void {
    this.projects = data.body;
  }

  private handleError(error: HttpErrorResponse) {
    if(error.status==401){
      this._subjectError.next(this.errorMessage='Usuario no autorizado');
    }else{
      if(error.error.Message!=null){
        this._subjectError.next(this.errorMessage=error.error.Message);
      }else {
        this._subjectError.next(this.errorMessage='Se ha producido un error');
      }
    }
  }
}
