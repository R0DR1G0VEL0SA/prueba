import { Injectable } from '@angular/core';
import {AngularFireAuth } from "@angular/fire/auth";
import { resolve } from 'url';
import { reject } from 'q';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth) { }
  
  //funcion para validar la respuesta del login
  login(email:string, password:string){
    return new Promise((resolve, rejected) =>{
      this.AFauth.auth.signInWithEmailAndPassword(email,password).then(res=>{
        resolve(email);
     }).catch(err => rejected( err)) 
    });
    }
}
