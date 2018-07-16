import { Component } from '@angular/core';
import { NavController,NavParams,ToastController } from 'ionic-angular';
import { SvHostService } from '../../app/services/servHost.service';
import { ModuleNotesPage } from '../moduleNotes/moduleNotes';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-moduledet',
  templateUrl: 'ModuleDet.html'
})
export class ModuleDetPage {

	modul:any;
  apiUrl= SvHostService.serverhost;
  
  constructor(public navCtrl: NavController, public http:HttpClient,public params:NavParams,public toastCtrl: ToastController) {
    this.modul=params.get('item');
  }



showNotes(itemtoview){
    this.navCtrl.push(ModuleNotesPage,{ item : itemtoview,userid : this.modul.id_module});
}  

  deletModule(id){
    
  	var reponse;
  var data = "?id="+id;
 var config = {headers : {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}};
  return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrl+'/module.php'+data , config)
        .subscribe(res => {
          resolve(res);
          console.log(res);
          reponse=res;
          if (reponse.connection == "Le module a été bien supprimer") {
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
