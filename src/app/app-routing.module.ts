import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Repo } from './repo';
import { RepoService } from './services/repo.service';
import { RepoIframeComponent } from './components/repo-iframe/repo-iframe.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// get all the repo objects defined in 'repo-manifest'
const repoService: RepoService = new RepoService;
const repos: Repo[] = repoService.getRepos();

// add the root end-point
const routes: Routes = [{ path: '', redirectTo: `/${repos[0].name}`, pathMatch: 'full' }];
// add a route for each repo object defined in 'repo-manifest'
repos.forEach((repo) => {
  routes.push({
    path: repo.name,
    component: RepoIframeComponent,
    data: repo
  })
})
// all other routes go to the page-not-found component
routes.push({ path: '**', component: PageNotFoundComponent })

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
