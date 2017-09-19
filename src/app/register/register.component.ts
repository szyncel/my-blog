import { AuthService } from './../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // user:firebase.User;

  constructor(private afAuth: AngularFireAuth, private authService: AuthService) { }

  ngOnInit() {
  }

  register(user) {
    this.authService.register(user);
  }

}
