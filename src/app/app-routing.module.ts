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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'products', component: ProductsComponent },
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
