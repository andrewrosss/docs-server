import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  contentPath: string = "../../../assets/pipe_inputs/index.html"

  constructor() { }

  public getContentPath(): string {
    return this.contentPath
  }
}
