import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductitemComponent } from '../product-card/productitem/productitem.component';
import { ProductCardComponent } from '../product-card/product-card.component';
@NgModule({
  declarations: [HomeComponent,ProductCardComponent,ProductitemComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
