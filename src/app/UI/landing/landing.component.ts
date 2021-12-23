import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: `<app-hero></app-hero>
    <app-categories></app-categories> `,
  styles: [``],
})
export class LandingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
