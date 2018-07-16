import { Component } from '@angular/core';
import { NavController,NavParams,ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SvHostService } from '../../app/services/servHost.service';


@Component({
  selector: 'page-noteDet',
  templateUrl: 'noteDet.html'
})
export class NoteDetPage {

  note:any;
  apiUrl= SvHostService.serverhost;
  edited=0;
	
  constructor(public navCtrl: NavController,public http:HttpClient,public params:NavParams,public toastCtrl: ToastController) {
    this.note=params.get('note');
    
  }

ionViewDidEnter(){var element   = document.getElementById('desInputBox');
    var textarea  = element.getElementsByTagName('textarea')[0];
    var sizei=document.body.clientHeight*0.67;
    textarea.style.minHeight  = sizei + "px";
    textarea.style.height     = sizei + "px";
  }

change() {
    this.edited=1;
    
}



saveNote(){

var reponse;
  var data = "titre="+ this.note.titre+"&note="+this.note.body+"&id="+this.note.id_note;
 var config = {headers : {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}};
  return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl+'/note.php', data , config)
        .subscribe(res => {
          resolve(res);
          console.log(res);
          reponse=res;
          if (reponse.connection == "La Note a été bien enregistrer") {
          this.inscriptionreussit(reponse.connection);
          this.navCtrl.pop();
          console.log(res);
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
