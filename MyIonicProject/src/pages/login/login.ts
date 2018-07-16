import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { InscriptionPage } from '../inscription/inscription';
import { SvHostService } from '../../app/services/servHost.service';
import { HttpClient } from '@angular/common/http';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

profile:any;

  apiUrl= SvHostService.serverhost;
  img="assets/imgs/logo.png"
  email='hello@hello.com';
  password='hello';

  constructor(public navCtrl: NavController,public http:HttpClient,public appCtrl:App,public toastCtrl: ToastController,private storage: Storage) {

  }

connecter(){
  var reponse;
	
	var donnee="?email="+this.email+"&password="+this.password;
	return new Promise(resolve => {
    this.http.get(this.apiUrl+"/user.php"+donnee).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  }).then(res => {
	reponse=res;
	if (reponse.connection == "connecter") {
          this.showMessage("Bienvenu "+reponse.profil.nom);
          this.storage.set('loggedIn', 'true');
          this.storage.set('profilId', reponse.profil.id);
          this.storage.set('usernam', reponse.profil.nom);
          this.storage.set('userpren', reponse.profil.prenom);
          this.storage.set('useremail', reponse.profil.email).then((res) => {
          this.appCtrl.getRootNav().setRoot(TabsPage);
          this.navCtrl.popToRoot(); 
  });
          
  }else { this.showMessage(reponse.connection);
          console.log(res);
          }
          console.log(res);
    
  });


	
}

showMessage(resp) {
    let toast = this.toastCtrl.create({
      message: resp,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

showInscription(){
	//logic
	this.navCtrl.push(InscriptionPage)
}

}
