import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './layout/home/home.component';

const login: Route = { path: '', component: LoginComponent };

const routes: Routes = [
  { path: '', component: LoginComponent, children: [login]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
