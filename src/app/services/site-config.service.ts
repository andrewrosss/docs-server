import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteConfigService {

  public toolbarTitle: string = 'Performance Phenomics';

  constructor() { }
}
