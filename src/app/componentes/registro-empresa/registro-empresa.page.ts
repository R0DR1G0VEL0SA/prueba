import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.page.html',
  styleUrls: ['./registro-empresa.page.scss'],
})
export class RegistroEmpresaPage implements OnInit {

  public name: string;
  public nit: string;
  public ActividadE: string;
  public rep: string;
  public email: string;
  public cel: string;
  public password: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmitRegisterEmpresa() {
    // tslint:disable-next-line: no-shadowed-variable
        this.auth.registerEmpresa(this.name, this.nit, this.ActividadE, this.rep, this.email, this.cel, this.password ).then( auth => {
            this.router.navigate(['home-empresa']);
            console.log(auth);
        }).catch(err => console.log(err));
      }

}
