import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <!-- app header -->
    <app-header id="header"></app-header>

    <!-- content render -->
    <router-outlet></router-outlet>

    <!-- app footer -->
    <app-footer id="footer"></app-footer>
  `,
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'Enigma';

  constructor() {}

  ngOnInit(): void {}
}




