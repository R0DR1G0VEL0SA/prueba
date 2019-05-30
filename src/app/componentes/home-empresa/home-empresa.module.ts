import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeEmpresaPage } from './home-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: HomeEmpresaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeEmpresaPage]
})
export class HomeEmpresaPageModule {}
