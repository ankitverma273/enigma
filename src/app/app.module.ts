import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './UI/fixed/header/header.component';
import { FooterComponent } from './UI/fixed/footer/footer.component';
import { CourseComponent } from './UI/home/course/course.component';
import { ShoppingCartComponent } from './UI/shopping_cart/shopping-cart/shopping-cart.component';
import { InstructorUploadComponent } from './UI/instructor/instructor-upload/instructor-upload.component';
import { CourseMainPageComponent } from './UI/course/course-main-page/course-main-page.component';
import { CourseUploadComponent } from './UI/instructor/course-upload/course-upload.component';
import { NoCoursesComponent } from './UI/instructor/no-courses/no-courses.component';
import { WishlistComponent } from './UI/shopping_cart/wishlist/wishlist.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, ShoppingCartComponent, InstructorUploadComponent, CourseMainPageComponent, CourseUploadComponent, NoCoursesComponent, WishlistComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
