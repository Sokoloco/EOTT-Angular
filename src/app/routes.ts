import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AyudaComponent } from './admin/ayuda/ayuda.component';
import { DashBoardComponent } from './admin/dash-board/dash-board.component';
import { QuejasComponent } from './admin/quejas/quejas.component';
import { TwitterComponent } from './admin/twitter/twitter.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { Role } from './_models/role';



    export const appRoutes : Routes = [
        {path: 'login', component: LoginComponent},
        {
            path:'admin',component : AdminComponent, canActivate :[AuthGuard],
            children: [
                { path : 'dashboard', component : DashBoardComponent},
                { path : 'ayuda', component : AyudaComponent},
                { path : 'quejas', component : QuejasComponent},
                { path : 'twitter', component : TwitterComponent},
                { path : 'usuarios', component : UsuariosComponent},
                { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
                ] 
        },
        { path: '', redirectTo: 'login', pathMatch: 'full'}
    ];