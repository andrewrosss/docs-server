import { Injectable } from '@angular/core';
import { Repo } from '../repo';
import { REPOS } from '../repo-manifest';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  private repos: Repo[] = REPOS;
  public selectedRepo: Repo = this.repos[0];

  constructor() { }

  getRepos(): Repo[] {
    return this.repos;
  }

  getSelectedRepo(): Repo {
    return this.selectedRepo;
  }

  setSelectedRepo(repo: Repo) {
    this.selectedRepo = repo;
  }

  getRepoContentPath(repo: Repo): string {
    return `assets/serve/${repo.name}/${repo.indexFile}`;
  }

  getRepoByName(repoName: string): Repo {
    return this.repos.find((repo) => { return repo.name == repoName })
  }

}
