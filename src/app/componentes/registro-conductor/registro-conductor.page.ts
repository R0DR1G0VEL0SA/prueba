import { Component, OnInit } from '@angular/core';
import {AuthService} from '../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-conductor',
  templateUrl: './registro-conductor.page.html',
  styleUrls: ['./registro-conductor.page.scss'],
})
export class RegistroConductorPage implements OnInit {

  public firstName: string;
  public lastName: string;
  public email: string;
  public cel: string;
  public city: string;
  public password: string;

// tslint:disable-next-line: no-shadowed-variable
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    throw new Error('Method not implemented.');
  }

  OnSubmitRegister() {
// tslint:disable-next-line: no-shadowed-variable
    this.auth.register(this.email, this.password, this.firstName, this.lastName, this.cel, this.city ).then( auth => {
        this.router.navigate(['home']);
        console.log(auth);
    }).catch(err => console.log(err));
  }
}
