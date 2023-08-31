import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from '../layout/home/home.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { DisciplinesComponent } from './disciplines/disciplines.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: SidebarComponent,  children: [
    { path: '', component: HomeComponent },
    { path: 'disciplines', component: DisciplinesComponent }
  ] }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
