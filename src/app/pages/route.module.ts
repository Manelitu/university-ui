import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from '../layout/home/home.component';
import { DisciplinesComponent } from './disciplines/disciplines.component';
import { CoursesComponent } from './courses/courses.component';
import { PeriodsComponent } from './periods/periods.component';
import { LayoutComponent } from '../components/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'app', component: LayoutComponent,  children: [
    { path: '', component: HomeComponent },
    { path: 'disciplines', component: DisciplinesComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'periods', component: PeriodsComponent }
  ] }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
