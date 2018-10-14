import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import {Router} from "@angular/router";
import {Subject} from 'rxjs';
import {debounceTime} from "rxjs/operators";
import {CustomerService} from '../services/customer.service';
import {HttpResponse} from '@angular/common/http';
import {StorageService} from "../services/storage.service";
import {Client} from "../classes/client";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public editForm: FormGroup;
  private _subject = new Subject<string>();
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private router: Router, 
    private storageService: StorageService, 
    private customerService: CustomerService) { }

  ngOnInit() {
    this._subject.subscribe((message) => this.errorMessage = message);
    this._subject.pipe(
      debounceTime(3000)
    ).subscribe(() => this.errorMessage = null);

    let company_name = this.storageService.getCurrentClient() ? this.storageService.getCurrentClient().company_name : '';
    let rut = this.storageService.getCurrentClient() ? this.storageService.getCurrentClient().rut : '';

    this.editForm = this.formBuilder.group({
      company_name: [{value: company_name, disabled: true} ],
      rut: [rut, Validators.required]
    })
  }

  public save(): void {
    if (this.editForm.valid) {
      let client = this.storageService.getCurrentClient(); 
      
      client.rut = this.editForm.controls['rut'].value;
      console.log(client);
      this.customerService.put(client)
        .subscribe(
           ((data: HttpResponse<Client>) => this.correctSave(data)),
           ((error: any) => {console.error(error);this.setErrorMessage()})
        )
    }else{
      document.getElementById('formLogin').classList.add('was-validated');
    }
  }

  public setErrorMessage() {
    this._subject.next(this.errorMessage='Credenciales inválidas');
  }

  private correctSave(data: HttpResponse<Client>) {
    this.storageService.setCurrentClient(data.body);
    this.router.navigateByUrl('/projects');
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
