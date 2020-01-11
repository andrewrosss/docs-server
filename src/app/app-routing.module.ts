import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Repo } from './repo';
import { RepoService } from './services/repo.service';
import { RepoIframeComponent } from './components/repo-iframe/repo-iframe.component';

// get all the repo objects defined in 'repo-manifest'
const repoService: RepoService = new RepoService;
const repos: Repo[] = repoService.getRepos();

const routes: Routes = [{ path: '', redirectTo: '/' + repos[0].name, pathMatch: 'full' },];

// add a route for each repo object defined in 'repo-manifest'
repos.forEach((repo) => {
  routes.push({
    path: repo.name,
    component: RepoIframeComponent,
    data: repo
  })
})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
