import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoIframeComponent } from './components/repo-iframe/repo-iframe.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'docs/docs-server', pathMatch: 'full' },
  { path: 'docs/:repoName', component: RepoIframeComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
