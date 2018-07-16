import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { NotesPage } from '../pages/notes/notes';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { InscriptionPage } from '../pages/inscription/inscription';
import { ModuleDetPage } from '../pages/ModuleDet/ModuleDet';
import { ModuleNotesPage } from '../pages/moduleNotes/moduleNotes';
import { ModuleAddPage } from '../pages/ModuleAdd/ModuleAdd';
import { ProfilePage } from '../pages/profile/profile';
import { NoteAddPage } from '../pages/noteAdd/noteAdd';
import { NoteDetPage } from '../pages/noteDet/noteDet';

import { ImageModal } from '../pages/modalsU/theimges';
import { MouleModal } from '../pages/modalsU/mouleMChoix';

import { SvHostService } from './services/servHost.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Splash } from '../pages/splash/splash';

@NgModule({
  declarations: [
    MyApp,
    NotesPage,
    HomePage,
    TabsPage,
    LoginPage,
    ProfilePage,
    InscriptionPage,
    ModuleDetPage,
    ModuleAddPage,
    ModuleNotesPage,
    NoteAddPage,
    ImageModal,
    MouleModal,
    NoteDetPage,
    Splash
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotesPage,
    HomePage,
    TabsPage,
    LoginPage,
    ProfilePage,
    InscriptionPage,
    ModuleDetPage,
    ModuleAddPage,
    NoteAddPage,
    ModuleNotesPage,
    ImageModal,
    MouleModal,
    NoteDetPage,
    Splash
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SvHostService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
