import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { MatSidenav } from '@angular/material';
import { Repo } from 'src/app/repo';
import { RepoService } from 'src/app/services/repo.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenav', { static: true }) public sidenav: MatSidenav;
  public repos: Repo[];

  constructor(
    private sidenavService: SidenavService,
    private repoService: RepoService,
    private hostElement: ElementRef) { }

  ngOnInit() {
    this.sidenavService.setSidenav(this.sidenav);
    this.repos = this.repoService.getRepos();
  }

}
