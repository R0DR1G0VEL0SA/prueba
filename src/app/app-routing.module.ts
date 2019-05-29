import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoLoginGuard } from './guards/nologin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canActivate : [AuthGuard]
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule',
    canActivate : [NoLoginGuard] },  { path: 'rol', loadChildren: './componentes/rol/rol.module#RolPageModule' },
  { path: 'registro-empresa', loadChildren: './componentes/registro-empresa/registro-empresa.module#RegistroEmpresaPageModule' },
  { path: 'registro-conductor', loadChildren: './componentes/registro-conductor/registro-conductor.module#RegistroConductorPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
