import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private sidenav: MatSidenav;

  constructor() { }

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open() {
    this.sidenav.open();
  }

  public close() {
    this.sidenav.close()
  }

  public toggle() {
    this.sidenav.toggle();
  }
  
}
