import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login'}
];

export const Routing = RouterModule.forRoot(appRoutes);