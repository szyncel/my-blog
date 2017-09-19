import { AuthService } from './../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  user: firebase.User;
  subscription: Subscription;

  constructor(private afAuth: AngularFireAuth, private authService: AuthService) {
    afAuth.authState.subscribe(user => this.user = user);
  }

  ngOnInit() {
  }

  logout() {
   this.authService.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
