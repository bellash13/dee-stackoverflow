import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.IsLoggedIn$.subscribe((IsLoggedIn)=>this.isLoggedIn=IsLoggedIn);
  }
  logout() {
    this.auth.logout();
  }
}
