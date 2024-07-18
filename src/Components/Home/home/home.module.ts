import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ToletTermsandConditionsComponent } from './tolet-termsand-conditions/tolet-termsand-conditions.component';
import { TenentTermsComponent } from './tenent-terms/tenent-terms.component';
import { PrivacyPoliciesComponent } from './privacy-policies/privacy-policies.component';



@NgModule({
  declarations: [
    MainPageComponent,
    MainNavComponent,
    SideNavComponent,
    FooterComponent,
    AboutUsComponent,
    FaqsComponent,
    ToletTermsandConditionsComponent,
    TenentTermsComponent,
    PrivacyPoliciesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
