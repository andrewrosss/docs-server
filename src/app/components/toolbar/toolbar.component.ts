import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { SiteConfigService } from 'src/app/services/site-config.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public toolbarTitle: string;

  constructor(
    private sidenavService: SidenavService,
    private configService: SiteConfigService) { }

  ngOnInit() {
    this.toolbarTitle = this.configService.toolbarTitle
  }

  toggleSidenav() {
    this.sidenavService.toggle()
  }

}
