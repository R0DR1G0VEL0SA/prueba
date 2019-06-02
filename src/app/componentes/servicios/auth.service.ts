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

  getPassword(email: string) {
    return new Promise((resolve, rejected) => {
      this.AFauth.auth.sendPasswordResetEmail(email).then(() => {
        resolve(true);
      })
      .catch(err => rejected(err));
    });
  }

  logout() {
    this.AFauth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  register(email: string, password: string, firstName: string, lastName: string, whatsapp: string, city: string) {
    return new Promise ((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then( res => {
          // console.log(res.user.uid);
        const uid = res.user.uid;
// tslint:disable-next-line: align
          this.db.collection('conductores').doc(uid).set({
            nombre : firstName,
            apellidos : lastName,
            correo : email,
            contrasena: password,
            celular: whatsapp,
            ciudad: city,
            uiid: uid,
            rol: '1'
          });
        resolve(res);
      }).catch( err => reject(err));
    });
  }

  registerEmpresa(name: string, nit: string, ActividadE: string, rep: string, email: string, cel: string,
                  password: string ) {
    return new Promise ((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then( res =>{
          // console.log(res.user.uid);
        const uid = res.user.uid;
// tslint:disable-next-line: align
          this.db.collection('empresas').doc(uid).set({
            nombre : name,
            nit : nit,
            representante : rep,
            actividad: ActividadE,
            whatsapp: cel,
// tslint:disable-next-line: object-literal-shorthand
            email: email,
            contrasena: password,
            uiid: uid,
            rol: '2'
          });
        resolve(res);
      }).catch( err => reject(err));
    });
  }
}
