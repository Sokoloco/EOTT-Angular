import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { FormsModule,ReactiveFormsModule }from'@angular/forms';
import {HttpClientModule}from'@angular/common/Http';
import { AuthGuard } from './auth/auth.guard';

import { AdminComponent } from './admin/admin.component';
import { DashBoardComponent } from './admin/dash-board/dash-board.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { QuejasComponent } from './admin/quejas/quejas.component';
import { TwitterComponent } from './admin/twitter/twitter.component';
import { AyudaComponent } from './admin/ayuda/ayuda.component';
import { appRoutes } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    UsuariosComponent,
    QuejasComponent,
    TwitterComponent,
    AyudaComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgxGaugeModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppModule { }
