import { Injectable } from '@angular/core';
import * as firebase from '@angular/fire/auth';

@Injectable()
export class LoginService {
  constructor() {}

  login(email: string, password: string) {
    const auth = firebase.getAuth();

    return new Promise((resolve, reject) => {
      firebase.signInWithEmailAndPassword(auth, email, password).then(
        (datos) => resolve(datos),
        (error) => reject(error)
      );
    });
  }
}
