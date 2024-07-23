import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './UserRegistration/user-registration.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { LoginComponent } from './login/login.component';
import { PropertyRegistrationComponent } from './property-registration/property-registration.component';

const registerRoutes: Routes = [
  {
    path:'Account',
    component:AccountInfoComponent,
    children:[
      {
        path:'UserRegister',
        component:UserRegistrationComponent,
        data:{
          title:'User Registration',
        }
      },
      {
        path:'Login',
        component:LoginComponent,
        data:{
          title:'Login',
        }
      },
      {
        path:'PropertyRegistration',
        component:PropertyRegistrationComponent,
        data:{
          title:'Register Property',
        }
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(registerRoutes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
