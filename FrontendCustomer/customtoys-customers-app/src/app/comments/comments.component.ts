import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import {debounceTime} from "rxjs/operators";
import {Subject} from "rxjs/index";
import {ProjectService} from "../services/project.service";
import {Project} from "../classes/project";
import {ActivatedRoute, Router} from "@angular/router";
import {Comment} from "../classes/comment";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  id_project: string;
  name: string;
  pageTitle = "";

  private _subjectError = new Subject<string>();
  errorMessage: string;
  comments: Array<Comment>;
  public editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private projectsService : ProjectService, private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    this._subjectError.subscribe((message) => this.errorMessage = message);
    this._subjectError.pipe(
      debounceTime(3000)
    ).subscribe(() => this.errorMessage = null);
    
    this.id_project = "" + this.currentRoute.snapshot.params["id"];
    this.pageTitle = "Comments";
    if (this.id_project == 'undefined') {
      this.id_project = null;
      this._subjectError.next(this.errorMessage='Se necesita un ID de proyecto');
    }
    else{
      //this.getProject();
      this.getComments();
    }

    this.editForm = this.formBuilder.group({
      text: ['', Validators.required]
    });
  }

  private getProject(){
    this.projectsService.getProject(this.id_project).subscribe(
      ((data : HttpResponse<Project>) => this.resultProject(data)),
      ((error: HttpErrorResponse) => { console.error(error);this.handleError(error)})
    );
  }

  private getComments(){
    this.projectsService.getCommentsProject(this.id_project).subscribe(
      ((data : HttpResponse<Array<Comment>>) => this.resultList(data)),
      ((error: HttpErrorResponse) => { console.error(error);this.handleError(error)})
    );
  }

  private save(){
    let text = this.editForm.controls['text'].value;

    this.projectsService.postCoommentProject(this.id_project, text).subscribe(
      ((data : HttpResponse<Comment>) => this.resultAddComment(data)),
      ((error: HttpErrorResponse) => { console.error(error);this.handleError(error)})
    );
  }

  private resultProject(data: HttpResponse<Project>): void {
    this.name = data.body.name;
    this.pageTitle = `Comments of ${name}`;
  }

  private resultList(data: HttpResponse<Array<Comment>>): void {
    this.comments = data.body;
  }
  private resultAddComment(data: HttpResponse<Comment>): void {
    this.comments.push(data.body);
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
