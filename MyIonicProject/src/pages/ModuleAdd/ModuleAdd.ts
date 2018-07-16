import { Component } from '@angular/core';
import { NavController,ModalController,NavParams,ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SvHostService } from '../../app/services/servHost.service';
import { ImageModal } from '../modalsU/theimges';


@Component({
  selector: 'page-moduleAdd',
  templateUrl: 'ModuleAdd.html'
})
export class ModuleAddPage {

	id:any;
	titre:any;
  idm:any;
	description:any;
	img="assets/imgs/cumpico.png";
  apiUrl= SvHostService.serverhost;
  miseajour='no';
  constructor(public navCtrl: NavController,public http:HttpClient,public modalCtrl: ModalController,public params:NavParams,public toastCtrl: ToastController) {
    this.id=params.get('userid');
    if (params.get('item')!=undefined) {
      let modul=params.get('item');
      this.titre=modul.module;
      this.description=modul.description;
      this.img=modul.image;
      this.idm=modul.id_module;
      this.miseajour='yes';
    }
  }


chooseImage() {
   let profileModal = this.modalCtrl.create(ImageModal);
   profileModal.onDidDismiss(data => {
   	if (data.source!='') {
   		this.img=data.source;
   	}
   	
   });
   profileModal.present();
 }

tryToSave(){
  
if (this.miseajour=='no') {
  this.saveModul();
}else this.updateModule();
}

updateModule(){
var reponse;
  var data = "module="+ this.titre+"&description="+this.description+"&image="+this.img+"&idm="+this.idm;
 var config = {headers : {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}};

  return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl+'/module.php', data , config)
        .subscribe(res => {
          resolve(res);
          reponse=res;
          if (reponse.connection == "Le Module a été bien enregistrer") {
          this.inscriptionreussit(reponse.connection);
          this.navCtrl.pop();
          }else {
          this.inscriptionreussit(reponse.connection);
          }
          
        }, (err) => {
          console.log(err);
          
        });
    });

}


saveModul(){

var reponse;
  var data = "module="+ this.titre+"&description="+this.description+"&image="+this.img+"&id="+this.id;
 var config = {headers : {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}};
  return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/module.php', data , config)
        .subscribe(res => {
          resolve(res);
          reponse=res;
          if (reponse.connection == "Le Module a été bien enregistrer") {
          this.inscriptionreussit(reponse.connection);
          this.navCtrl.pop();
          }else {
          this.inscriptionreussit(reponse.connection);
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


}
