import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './UI/fixed/header/header.component';
import { FooterComponent } from './UI/fixed/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './ngRx/reducers';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot(rootReducer)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
