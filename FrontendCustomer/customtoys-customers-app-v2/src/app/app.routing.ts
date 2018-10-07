import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CustomerComponent} from "./customer/customer.component";
import {CommentsComponent} from "./comments/comments.component";
import {ProjectsComponent} from "./projects/projects.component";
import {Apiconfig} from "./classes/apiconfig";


const appRoutes: Routes = [
  { path: Apiconfig.getApiStartUri() + 'login', component: LoginComponent},
  { path: Apiconfig.getApiStartUri() + 'customer', component: CustomerComponent},
  { path: Apiconfig.getApiStartUri() + 'projects/:id/comments', component: CommentsComponent},
  { path: Apiconfig.getApiStartUri() + 'projects', component: ProjectsComponent},
  { path: '', redirectTo: Apiconfig.getApiStartUri() + 'login', pathMatch: 'full' },
  { path: '**', redirectTo: Apiconfig.getApiStartUri() + 'login'}
];

export const Routing = RouterModule.forRoot(appRoutes);