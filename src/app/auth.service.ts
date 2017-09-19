import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router) {
    this.user$ = afAuth.authState;
  }


  login(user) {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then((success) => {
      this.router.navigateByUrl(returnUrl);
    })

      .catch(function (error) {
        alert(error.message);
        let errors = error.message;
      });
  }

  register(user) {
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
    .then((success)=>{
      this.user$.subscribe(user => {
        if (user) {
          this.userService.save(user);
        }
      })
    })
    
    .catch(function (error) {
      // let errorCode = error.code;
      alert(error.message);
      // let errorMessage = error.message;
    });
  }


  logout() {
    this.afAuth.auth.signOut();
  }

}
