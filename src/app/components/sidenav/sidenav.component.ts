import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenav', {static: true}) public sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }

}
