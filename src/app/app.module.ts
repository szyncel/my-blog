import { PostService } from './post.service';
import { UserService } from './user.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';
import { PostsFormComponent } from './posts-form/posts-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    UserPanelComponent,
    AdminPanelComponent,
    AdminPostsComponent,
    PostsFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'user-panel', component: UserPanelComponent, canActivate: [AuthGuardService] },
      { path: 'admin', component: AdminPanelComponent, canActivate: [AuthGuardService] },     
      { path: 'admin/posts/new', component: PostsFormComponent, canActivate: [AuthGuardService] },
      { path: 'admin/posts/:id', component: PostsFormComponent, canActivate: [AuthGuardService] },
      { path: 'admin/posts', component: AdminPostsComponent, canActivate: [AuthGuardService] }

    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
