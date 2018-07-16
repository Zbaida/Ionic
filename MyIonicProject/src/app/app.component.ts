import { Component } from '@angular/core';
import { Platform,ModalController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
//import { Splash } from '../pages/splash/splash';

@Component({
  templateUrl: 'app.html'//,

})
export class MyApp {
  rootPage:any;
  etat:string;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private storage: Storage,modalCtrl:ModalController) {
	  
	  this.storage.get('loggedIn').then((valx) => {
			  	if (valx) {
		        this.rootPage = TabsPage;
		      } else {
		        this.rootPage = LoginPage;
		      }
		  });
   	  platform.ready().then(() => {
      statusBar.styleDefault();
      //let splash = modalCtrl.create(Splash);
        //   splash.present();
      //splashScreen.hide();
      
    });
  }
}
