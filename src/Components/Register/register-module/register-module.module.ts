import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUsersComponent } from './register-users/register-users.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({
  declarations: [
    RegisterUsersComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RegisterModuleModule { }
