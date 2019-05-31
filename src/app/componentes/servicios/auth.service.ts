import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, private router: Router, private db: AngularFirestore) { }

  login(email: string, password: string) {

// tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve, rejected) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });
  }

  logout() {
    this.AFauth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  register(email: string, password: string, firstName: string){

    return new Promise ((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then( res =>{
          // console.log(res.user.uid);
        const uid = res.user.uid;
// tslint:disable-next-line: align
          this.db.collection('conductores').doc(uid).set({
            nombre : firstName,
            correo : email,
            contrasena: password,
            uiid: uid
          });

        resolve(res)
      }).catch( err => reject(err))
    })
  }
}
