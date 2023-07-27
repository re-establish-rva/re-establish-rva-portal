import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }

  // Returns true if 'SessionUser' is present in LocalStorage; returns false if not
  getToken() {
    return !!localStorage.getItem("SessionUser");
  }

}
