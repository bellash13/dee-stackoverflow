import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  IsLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {}
  IsLoggedIn() {
    return this.isLoggedIn;
  }
  login(next: string) {
    this.isLoggedIn = true;
    this.IsLoggedIn$.next(this.isLoggedIn);
    this.router.navigateByUrl(next);
  }
  logout() {
    this.isLoggedIn = false;
    this.IsLoggedIn$.next(this.isLoggedIn);
  }
}
