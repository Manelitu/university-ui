import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from '../layout/home/home.component';
import { AuthenticationComponent } from '../layout/authentication/authentication.component';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    AuthenticationComponent,
    SidebarComponent,
    LogoutComponent,
    LayoutComponent
  ],
  imports: [CommonModule, ToastModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot([])],
  exports: [LoginComponent]
})
export class ComponentsModule { }
