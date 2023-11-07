import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './component/header/header.component';

import { ContactComponent } from './pages/contact/contact.component';
import { CompanyComponent } from './pages/company/company.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { CookiesAgreementComponent } from './component/cookies-agreement/cookies-agreement.component';
import { CookiesPolicyComponent } from './pages/cookies-policy/cookies-policy.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './component/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LegalWarningComponent } from './pages/legal-warning/legal-warning.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { BusinessComponent } from './pages/business/business.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CarouselHomeComponent } from './component/carousel/carousel-home/carousel-home.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { BreadComponent } from './pages/products/bread/bread.component';
import { BakeryComponent } from './pages/products/bakery/bakery.component';
import { DotsComponent } from './pages/products/dots/dots.component';
import { PizzaComponent } from './pages/products/pizza/pizza.component';
import { LykkeComponent } from './pages/products/lykke/lykke.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './component/product-card/card/card.component';
import { SaltyComponent } from './pages/products/salty/salty.component';
import { GlutenFreeComponent } from './pages/products/glutenfree/glutenfree.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    CompanyComponent,
    ProductsComponent,
    HomeComponent,
    BusinessComponent,
    CookiesAgreementComponent,
    CookiesPolicyComponent,
    LegalWarningComponent,
    PrivacyPolicyComponent,
    BusinessComponent,
    NotFoundComponent,
    ProductCardComponent,
    BreadComponent,
    BakeryComponent,
    DotsComponent,
    PizzaComponent,
    LykkeComponent,
    CardComponent,
    SaltyComponent,
    GlutenFreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    CarouselComponent,
    CarouselHomeComponent,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
