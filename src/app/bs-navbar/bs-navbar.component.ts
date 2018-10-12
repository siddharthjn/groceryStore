import { AuthService } from './../auth.service';
import { AuthGuard } from './../auth-guard.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  constructor(public auth: AuthService) {
  }

  logout() {
    this.auth.logout();
  }

}
