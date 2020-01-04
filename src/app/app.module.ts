import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { RouterModule} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BuyComponent } from './buy/buy.component';
import { NewsComponent } from './news/news.component';
import { GalleryRouterComponent } from './gallery-router/gallery-router.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    HeaderComponent,
    SliderComponent,
    AboutUsComponent,
    ContactComponent,
    GalleryComponent,
    LoginComponent,
    NgForm,
    RegistrationComponent,
    SignUpComponent,
    BuyComponent,
    NewsComponent,
    GalleryRouterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'buy',
        component: BuyComponent,
        outlet: 'menu'
      },
      {
        path: 'news',
        component: NewsComponent,
        outlet: 'menu'
      },
      {
        path: 'gallery',
        component: GalleryRouterComponent,
        outlet: 'menu'
      },
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',
        component: SignUpComponent
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
