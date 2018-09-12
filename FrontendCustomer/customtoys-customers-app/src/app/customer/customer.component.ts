import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import {Router} from "@angular/router";
import {Subject} from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public editForm: FormGroup;
  private _subject = new Subject<string>();
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      username: ['', Validators.required],
      rut: ['', Validators.required],
    })
  }

  save(event){
    this.router.navigateByUrl('/projects');
  }
}
