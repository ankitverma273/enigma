import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './UI/fixed/header/header.component';
import { FooterComponent } from './UI/fixed/footer/footer.component';
import { CourseComponent } from './UI/home/course/course.component';
import { ShoppingCartComponent } from './UI/shopping_cart/shopping-cart/shopping-cart.component';
import { InstructorUploadComponent } from './UI/instructor/instructor-upload/instructor-upload.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, ShoppingCartComponent, InstructorUploadComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
