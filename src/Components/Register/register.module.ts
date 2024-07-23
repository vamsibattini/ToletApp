import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { UserRegistrationComponent } from './UserRegistration/user-registration.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { LoginComponent } from './login/login.component';
import { PropertyRegistrationComponent } from './property-registration/property-registration.component';



@NgModule({
  declarations: [
    UserRegistrationComponent,
    AccountInfoComponent,
    LoginComponent,
    PropertyRegistrationComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ],
  exports:[LoginComponent]
})
export class RegisterModule { }
