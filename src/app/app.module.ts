import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HamburgersListComponent } from './hamburgers-list/hamburgers-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HamburgersAboutComponent } from './hamburgers-about/hamburgers-about.component';
import { HamburgersBurgersComponent } from './hamburgers-burgers/hamburgers-burgers.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HamburgersListComponent,
    ShoppingCartComponent,
    HamburgersAboutComponent,
    HamburgersBurgersComponent,
    InputNumberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
