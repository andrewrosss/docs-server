import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoIframeComponent } from './repo-iframe.component';

describe('RepoIframeComponent', () => {
  let component: RepoIframeComponent;
  let fixture: ComponentFixture<RepoIframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoIframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
