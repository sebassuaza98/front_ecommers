import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './app/views/register/register.component';
import { LoginComponent } from './app/views/login/login.component';
const routes: Routes = [
{ path: '', redirectTo: '/viewComponent', pathMatch: 'full' }, 
{ path: 'viewComponent', component: LoginComponent },
{ path: 'RegisterComponent', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
