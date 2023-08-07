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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    CarouselComponent,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
