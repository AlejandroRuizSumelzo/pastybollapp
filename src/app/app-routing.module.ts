import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { CompanyComponent } from './pages/company/company.component';
import { HomeComponent } from './pages/home/home.component';
import { CookiesPolicyComponent } from './pages/cookies-policy/cookies-policy.component';
import { LegalWarningComponent } from './pages/legal-warning/legal-warning.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { BusinessComponent } from './pages/business/business.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BreadComponent } from './pages/products/bread/bread.component';
import { BakeryComponent } from './pages/products/bakery/bakery.component';
import { DotsComponent } from './pages/products/dots/dots.component';
import { KitchenComponent } from './pages/products/kitchen/kitchen.component';
import { PizzaComponent } from './pages/products/pizza/pizza.component';
import { LykkeComponent } from './pages/products/lykke/lykke.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'company', component: CompanyComponent },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: 'bread', component: BreadComponent },
      { path: 'bakery', component: BakeryComponent },
      { path: 'dots', component: DotsComponent },
      { path: 'kitchen', component: KitchenComponent },
      { path: 'pizza', component: PizzaComponent },
      { path: 'lykke', component: LykkeComponent },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'cookies-politica', component: CookiesPolicyComponent },
  { path: 'aviso-legal', component: LegalWarningComponent },
  { path: 'politica-privacidad', component: PrivacyPolicyComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
