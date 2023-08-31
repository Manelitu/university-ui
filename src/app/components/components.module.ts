import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from '../account/create-account/create-account.component';
import { HomeComponent } from '../layout/home/home.component';
import { AuthenticationComponent } from '../layout/authentication/authentication.component';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    AuthenticationComponent
  ],
  imports: [CommonModule, ToastModule, FormsModule, ReactiveFormsModule],
  exports: [LoginComponent]
})
export class ComponentsModule { }
