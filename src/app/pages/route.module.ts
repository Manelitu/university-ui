import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DisciplinesComponent } from './disciplines/disciplines.component';
import { CoursesComponent } from './courses/courses.component';
import { PeriodsComponent } from './periods/periods.component'
import { LayoutComponent } from '../components/layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from '../guard/auth.guard';
import { CoordinatorGuard } from '../guard/coordinator.guard';
import { AdminGuard } from '../guard/admin.guard';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from '../layout/home/home.component';
import { UserGuard } from '../guard/user.guard';
import { CurriculumComponent } from './curriculum/curriculum.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: LayoutComponent, canActivate: [AuthGuard], children: [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'disciplines', component: DisciplinesComponent, canActivate: [CoordinatorGuard] },
    { path: 'courses', component: CoursesComponent, canActivate: [CoordinatorGuard] },
    { path: 'periods', component: PeriodsComponent, canActivate: [CoordinatorGuard] },
    { path: 'users', component: UsersComponent, canActivate: [AdminGuard] },
    { path: 'curriculum', component: CurriculumComponent, canActivate: [UserGuard] },
  ]},
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
