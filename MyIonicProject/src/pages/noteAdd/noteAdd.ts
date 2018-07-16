import { Component } from '@angular/core';
import { NavController,ModalController,NavParams,ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { MouleModal } from '../modalsU/mouleMChoix';
import { SvHostService } from '../../app/services/servHost.service';


@Component({
  selector: 'page-noteAdd',
  templateUrl: 'noteAdd.html'
})
export class NoteAddPage {

  id:any;
	iduser:any;
	titre:'';
	description:'';
  apiUrl= SvHostService.serverhost;

	
  constructor(public navCtrl: NavController,public http:HttpClient,public modalCtrl: ModalController,public params:NavParams,public toastCtrl: ToastController) {
    this.id=params.get('idmodule');
  	this.iduser=params.get('userid');
    

  }

ionViewDidEnter(){
    var element   = document.getElementById('desInputBox');
    var textarea  = element.getElementsByTagName('textarea')[0];
    var sizei=document.body.clientHeight*0.67;
    textarea.style.minHeight  = sizei + "px";
    textarea.style.height     = sizei + "px";
  }

tryToSave(){
  
  if (this.id!=null) {
    this.saveNote();
  }else{
    let profileModal = this.modalCtrl.create(MouleModal,{ userid : this.iduser});
   profileModal.onDidDismiss(data => {
     if (data.idm!='') {
       this.id=data.idm;
     this.inscriptionreussit('Vous avez choisie '+data.module);
     this.saveNote();
     }
   });
   profileModal.present();
  }

}

saveNote(){

var reponse;
  var data = "titre="+ this.titre+"&note="+this.description+"&idm="+this.id;
 var config = {headers : {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}};
  return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/note.php', data , config)
        .subscribe(res => {
          resolve(res);
          console.log(res);
          reponse=res;
          if (reponse.connection == "La Note a été bien enregistrer") {
          this.inscriptionreussit(reponse.connection);
          this.navCtrl.pop();
          }else {
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


}
