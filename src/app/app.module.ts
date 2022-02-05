import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './UI/fixed/header/header.component';
import { FooterComponent } from './UI/fixed/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './ngRx/reducers';
import { ProductCardComponent } from './UI/product-card/product-card.component';
import { ProductitemComponent } from './UI/product-card/productitem/productitem.component';
import { SignInModalComponent } from './UI/SignIn_Up/sign-in-modal/sign-in-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignInModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot(rootReducer)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
