import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../servicios/auth.service";
import {Route, Router} from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   user : string;
   password: string;

  constructor(private authService : AuthService, public router: Router) { }

  ngOnInit() {
  }

  OnSubmitLogin(){
    this.authService.login(this.user,this.password).then(res =>{
      this.router.navigate(['/home']);
    }).catch(err => alert('datos incorrectos'))
  }

}
