import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LogoutService} from "../services/logout.service";
import {StorageService} from "../services/storage.service";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private storageService: StorageService, private logoutService: LogoutService) { }

  ngOnInit() {
    if (!this.storageService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }

    this.checkRouting();
  }

  customer(event){
    this.router.navigateByUrl('/customer');
  }
  projects(event){
    this.router.navigateByUrl('/projects');
  }
  login(event){
    this.router.navigateByUrl('/login');
  }
  public logout(): void {
    this.logoutService.logout(this.storageService.getCurrentToken())
      .subscribe(
        ((data: HttpResponse<any>) => this.storageService.logout()),
        ((error: any) => console.log(error))
      )
  }

  private checkRouting() {
    if (this.storageService.isAuthenticated()) 
      if(this.storageService.getCurrentClient() && this.storageService.getCurrentClient().rut=='')
        this.router.navigate(['/customer']);
  }
}
