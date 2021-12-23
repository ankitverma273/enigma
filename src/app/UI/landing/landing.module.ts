import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { CategoriesComponent } from './categories/categories.component';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
@NgModule({
  declarations: [HeroComponent,CategoriesComponent,LandingComponent],
  imports: [CommonModule,LandingRoutingModule],
})
export class LandingModule {}
