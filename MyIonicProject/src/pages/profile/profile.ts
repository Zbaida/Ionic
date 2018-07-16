import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { App } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

	profile={ nom : " ", prenom:" ", email: " ", notes:"10", modules : "70"};
  pet='puppies';

  constructor(public navCtrl: NavController,private storage: Storage,public appCtrl: App,private alertCtrl: AlertController,public loadingCtrl: LoadingController) {
  	this.storage.get('usernam').then((val) => {  this.profile.nom=val });
  	this.storage.get('profilId').then((val) => {  this.profile.notes=val });
  	this.storage.get('userpren').then((val) => {  this.profile.prenom=val });
  	this.storage.get('useremail').then((val) => {  this.profile.email=val });
  	
  }

  deconnecter(){
  	this.storage.clear();
  	this.appCtrl.getRootNav().setRoot(LoginPage);
	this.navCtrl.popToRoot();
  }

presentLoadingM() {
  let loading = this.loadingCtrl.create({
  	spinner: 'crescent',
    content: 'Please wait...'
  });

  loading.present();

  setTimeout(() => {
  this.deconnecter();
    loading.dismiss();
  }, 2000);
}


logoutConfirm() {
  let alert = this.alertCtrl.create({
    title: 'Confirmation',
    message: 'Voulez vous se deconnecter?',
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Ok',
        handler: () => {
        	this.presentLoadingM();
        console.log('Buy clicked');
        }
      }
    ]
  });
  alert.present();
}

}
