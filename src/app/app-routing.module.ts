import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoLoginGuard } from './guards/nologin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: './componentes/home/home.module#HomePageModule', canActivate : [AuthGuard]},
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule', canActivate : [NoLoginGuard] },
  { path: 'rol', loadChildren: './componentes/rol/rol.module#RolPageModule' },
  { path: 'registro-empresa', loadChildren: './componentes/registro-empresa/registro-empresa.module#RegistroEmpresaPageModule' },
// tslint:disable-next-line: max-line-length
  { path: 'registro-conductor', loadChildren: './componentes/registro-conductor/registro-conductor.module#RegistroConductorPageModule', canActivate : [NoLoginGuard]},
  { path: 'intro', loadChildren: './componentes/intro/intro.module#IntroPageModule' },
  { path: 'contrasena', loadChildren: './componentes/contrasena/contrasena.module#ContrasenaPageModule' },
  { path: 'home-empresa', loadChildren: './componentes/home-empresa/home-empresa.module#HomeEmpresaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
