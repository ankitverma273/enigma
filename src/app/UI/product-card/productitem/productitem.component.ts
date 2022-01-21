import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/Modules/products';
@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css'],
})
export class ProductitemComponent implements OnInit {
  @Input() productsItem: any;
  constructor() {}

  ngOnInit() {}
}
