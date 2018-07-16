import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { SvHostService } from '../../app/services/servHost.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html'
})
export class InscriptionPage {

  apiUrl= SvHostService.serverhost;
  user = { nom: '', prenom: '', email: '', password: '', repassword: ''};

  constructor(public navCtrl: NavController,public http:HttpClient,public toastCtrl: ToastController) {


  }

inscrir(){
  var reponse;
  var data = "nom="+ this.user.nom+"&prenom="+this.user.prenom+"&email="+this.user.email+"&password="+this.user.password+"&repassword="+this.user.repassword;
 var config = {headers : {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}};
  return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/user.php', data , config)
        .subscribe(res => {
          resolve(res);
          console.log(res);
          reponse=res;
          if (reponse.connection == "Inscription Reussit") {
          this.inscriptionreussit(reponse.connection);
          this.navCtrl.pop();
          console.log(res);
          }else{
          this.inscriptionreussit(reponse.connection);
          console.log(res);
          }
          
        }, (err) => {
          console.log(err);
          
        });
    });
  
  }


  inscriptionreussit(resp) {
    let toast = this.toastCtrl.create({
      message: resp,
      duration: 3000
    });
    toast.present();
  }


back(){
  this.navCtrl.pop();
}

}
