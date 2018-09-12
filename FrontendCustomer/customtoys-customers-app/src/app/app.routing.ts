import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CustomerComponent} from "./customer/customer.component";
import {ProjectsComponent} from "./projects/projects.component";


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login'}
];

export const Routing = RouterModule.forRoot(appRoutes);