import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  

  <app-product-card></app-product-card>
  
  
  `,
  styleUrls: ['home.component.sass'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
