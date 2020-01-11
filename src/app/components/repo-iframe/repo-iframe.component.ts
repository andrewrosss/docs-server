import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repo } from 'src/app/repo';
import { RepoService } from 'src/app/services/repo.service';

@Component({
  selector: 'app-repo-iframe',
  templateUrl: './repo-iframe.component.html',
  styleUrls: ['./repo-iframe.component.css']
})
export class RepoIframeComponent implements OnInit {

  private repo: Repo;

  constructor(
    private activatedroute: ActivatedRoute,
    private repoService: RepoService,
    private hostElement: ElementRef) { }

  ngOnInit() {
    this.activatedroute.data.subscribe(data => {
      this.repo = data as Repo;
      this.setContent(this.repo)})
  }

  setContent(repo: Repo) {
    const iframe = this.hostElement.nativeElement.querySelector('iframe');
    this.repoService.setSelectedRepo(repo);
    iframe.src = this.repoService.getRepoContentPath(this.repoService.getSelectedRepo());
  }

}
