import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MessagesModule   } from 'primeng/messages';
import { JwtModule, } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { RoutingModule } from './pages/route.module';
import { ComponentsModule } from './components/components.module';
import { AuthGuard } from './guard/auth.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { CardModule } from 'primeng/card';
import { DisciplinesComponent } from './pages/disciplines/disciplines.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';
import { CoursesComponent } from './pages/courses/courses.component';
import { PeriodsComponent } from './pages/periods/periods.component';
import { DropdownModule } from 'primeng/dropdown';
import { CoordinatorGuard } from './guard/coordinator.guard';
import { AdminGuard } from './guard/admin.guard';
import { UserGuard } from './guard/user.guard';
import { UsersComponent } from './pages/users/users.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DisciplinesComponent,
    CoursesComponent,
    PeriodsComponent,
    UsersComponent,
    CurriculumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    MessagesModule,
    BrowserAnimationsModule,
    PagesModule,
    RoutingModule,
    ComponentsModule,
    CardModule,
    OverlayPanelModule,
    PanelModule,
    DialogModule,
    SplitButtonModule,
    ReactiveFormsModule,
    InputTextareaModule,
    ToastModule,
    FormsModule,
    DropdownModule,
    TableModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token'),
        allowedDomains: ['http://localhost:8080'],
        disallowedRoutes: [],
      },
    })
  ],
  providers: [AuthGuard, MessageService, CoordinatorGuard, AdminGuard, UserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
