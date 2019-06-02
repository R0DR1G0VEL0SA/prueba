import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.page.html',
  styleUrls: ['./contrasena.page.scss'],
})
export class ContrasenaPage implements OnInit {
  email: string;


 constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  resetPassword() {
    this.authService.getPassword(this.email).then(res => {
      this.router.navigate(['/login']);
       }).catch(err => alert('El correo ingresado no existe'));

  }

}
