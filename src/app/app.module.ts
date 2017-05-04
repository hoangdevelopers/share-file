import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {appRouter} from './app.routes'
import { Home } from './component/home/home.component';
import { Login } from './component/login/login.component';
import { Footer } from './component/footer/footer.component';
import { Header } from './component/header/header.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyClZ-bjFNi2GG13QxWMnqxVjjK89_JUqNA",
  authDomain: "file-share-6f962.firebaseapp.com",
  databaseURL: "https://file-share-6f962.firebaseio.com",
  projectId: "file-share-6f962",
  storageBucket: "file-share-6f962.appspot.com",
  messagingSenderId: "686323763419"
};

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Footer,
    Home,
    Login
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    appRouter

  ],
  providers: [AngularFireDatabase, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }