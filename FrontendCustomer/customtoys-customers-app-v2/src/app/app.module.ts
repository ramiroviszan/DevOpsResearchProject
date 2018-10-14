import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routing} from "./app.routing";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CustomerComponent } from './customer/customer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './comments/comments.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    NavbarComponent,
    ProjectsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    ReactiveFormsModule,
    FormsModule,HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
