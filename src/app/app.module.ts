import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NoteService } from './note.service';

import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyCnBZIJOvJJ-MK-82qpfOKosH6v33Yh8hM",
  authDomain: "usjt-20192-dp-notablenotes.firebaseapp.com",
  databaseURL: "https://usjt-20192-dp-notablenotes.firebaseio.com",
  projectId: "usjt-20192-dp-notablenotes",
  storageBucket: "usjt-20192-dp-notablenotes.appspot.com",
  messagingSenderId: "262584007925",
  appId: "1:262584007925:web:6a056b1355f5bc0fd0d9bc",
  measurementId: "G-K03QLR7QK6"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp (firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NoteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
