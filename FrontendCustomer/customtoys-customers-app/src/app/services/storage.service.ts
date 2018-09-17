import { Injectable } from '@angular/core';
import {Session} from "../classes/session";
import {User} from "../classes/user";
import {Client} from "../classes/client";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private localStorageService;
  private currentSession : Session = null;

  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
  }

  setCurrentSession(session: Session): void {
    this.currentSession = session;
    
    this.localStorageService.setItem('sesion', JSON.stringify(session));
  }

  loadSessionData(): Session{
    var sessionStr = this.localStorageService.getItem('sesion');
    
    return (sessionStr) ? <Session> JSON.parse(sessionStr) : null;
  }

  getCurrentSession(): Session {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('sesion');
    
    this.currentSession = null;
  }

  getCurrentUser(): User {
    var session: Session = this.getCurrentSession();
    
    return (session && session.user) ? session.user : null;
  };

  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
  };

  getCurrentToken(): string {
    var session = this.getCurrentSession();
    
    return (session && session.user && session.user.token) ? session.user.token : null;
  };

  getCurrentClient(): Client {
    var session = this.getCurrentSession();
    
    return (session && session.client) ? session.client : null;
  };

  setCurrentClient(client: Client) {
    var session = this.getCurrentSession();
    
    session.client = client;
    
    this.setCurrentSession(session);
  };

  logout(): void{
    this.removeCurrentSession();
    this.router.navigate(['/login']);
  }
}