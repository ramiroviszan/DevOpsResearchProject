import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import {Router} from "@angular/router";
import {HttpResponse} from '@angular/common/http';
import {debounceTime} from "rxjs/operators";
import {Subject} from 'rxjs';
import {LoginService} from '../services/login.service';
import {CustomerService} from '../services/customer.service';
import {StorageService} from "../services/storage.service";
import {User} from "../classes/user";
import {Client} from "../classes/client";
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
    private storageService: StorageService, private loginService: LoginService, private customerService: CustomerService) { }

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
    let session=new Session(user);
    this.storageService.setCurrentSession(session);

    this.getCheckRut();
  }

  private getCheckRut() {
    this.customerService.get()
    .subscribe(
       ((data: HttpResponse<Client>) => this.checkRouting(data)),
       ((error: any) => {console.error(error);this.setErrorMessage()})
    )
  }

  private checkRouting(data: HttpResponse<Client>) {
    let client=data.body;

    this.storageService.setCurrentClient(client);

    if(this.storageService.getCurrentClient().rut!='') 
      this.router.navigate(['/projects']);
    else
      this.router.navigate(['/customer']);
  }

  keyDownFunction(event){
    if(event.keyCode == 13) {
      this.login();
    }
  }
}
