import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistroEmpresaPage } from './registro-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroEmpresaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistroEmpresaPage]
})
export class RegistroEmpresaPageModule {}
