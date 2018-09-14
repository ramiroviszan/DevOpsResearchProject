import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import {Router} from "@angular/router";
import {HttpResponse} from '@angular/common/http';
import {debounceTime} from "rxjs/operators";
import {Subject} from 'rxjs';
import {LoginService} from '../services/login.service';
import {StorageService} from "../services/storage.service";
import {User} from "../classes/user";
import {Session} from "../classes/session";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  private _subject = new Subject<string>();
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private router: Router, 
    private storageService: StorageService, private loginService: LoginService) { }

  ngOnInit() {
    this._subject.subscribe((message) => this.errorMessage = message);
    this._subject.pipe(
      debounceTime(3000)
    ).subscribe(() => this.errorMessage = null);

    if (this.storageService.isAuthenticated()) {
      this.router.navigate(['/projects']);
    }
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  //
  public login(): void {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value)
        .subscribe(
           ((data: HttpResponse<User>) => this.correctLogin(data)),
           ((error: any) => {console.error(error);this.setErrorMessage()})
        )
    }else{
      document.getElementById('formLogin').classList.add('was-validated');
    }
  }

  public setErrorMessage() {
    this._subject.next(this.errorMessage='Credenciales inválidas');
  }

  private correctLogin(data: HttpResponse<User>) {
    let user=data.body;
    let token=data.headers.get("Token");
    let session=new Session(token,user);
    this.storageService.setCurrentSession(session);

    this.router.navigate(['/projects']);
  }

  keyDownFunction(event){
    if(event.keyCode == 13) {
      this.login();
    }
  }
}
