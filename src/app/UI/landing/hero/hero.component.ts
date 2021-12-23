import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass'],
})
export class HeroComponent implements OnInit {
  @Output() loginTrigger = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
