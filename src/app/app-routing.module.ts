import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsComponent } from './pages/news/news.component';
import { ProductsComponent } from './pages/products/products.component';
import { CompanyComponent } from './pages/company/company.component';
import { HomeComponent } from './pages/home/home.component';
import { CookiesPolicyComponent } from './pages/cookies-policy/cookies-policy.component';
import { LegalWarningComponent } from './pages/legal-warning/legal-warning.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news', component: NewsComponent },
  { path: 'cookies-politica', component: CookiesPolicyComponent },
  { path: 'aviso-legal', component: LegalWarningComponent },
  { path: 'politica-privacidad', component: PrivacyPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
