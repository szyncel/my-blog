import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user:firebase.User){
    this.db.object('/users/'+user.uid).update({
      email:user.email,
      isAdmin:false
    })

  }

}
