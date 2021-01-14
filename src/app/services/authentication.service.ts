import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  authenticate(username, password): boolean {
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('username');
    console.log(!user === null);
    return !(user === null);
  }

  logOut(): void {
    sessionStorage.removeItem('username');
  }
}
