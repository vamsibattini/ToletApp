import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ABoutUsComponent } from './about-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsModelComponent } from './terms-model/terms-model.component';



@NgModule({
  declarations: [
    ABoutUsComponent,
    FaqsComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    MainPageComponent,
    PrivacyPolicyComponent,
    TermsModelComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
