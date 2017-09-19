import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }


  login(user) {
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).catch(function (error) {
      alert(error.message);
      let errors = error.message;
    });
  }

  register(user) {
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
      // let errorCode = error.code;
      alert(error.message);
      // let errorMessage = error.message;
    });
  }


  logout() {
    this.afAuth.auth.signOut();
  }

}
