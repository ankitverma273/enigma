import { Component, OnInit } from '@angular/core';
import { ConnectMetaMaskService } from './MetaMask/connect-meta-mask.service';

@Component({
  selector: 'app-root',
  template: `
    <!-- app header -->
    <app-header></app-header>

    <!-- content render -->
    <router-outlet></router-outlet>

    <!-- app footer -->
    <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'Enigma';
  
  constructor(private metaMaskService:ConnectMetaMaskService){

  }

  ngOnInit(): void {
  }
}
