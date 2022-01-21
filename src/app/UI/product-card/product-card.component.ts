import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/course/product.service';
import { Products } from 'src/app/Modules/products';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass'],
})
export class ProductCardComponent implements OnInit {
  products: Products[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
