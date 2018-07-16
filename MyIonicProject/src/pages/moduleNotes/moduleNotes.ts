import { Component } from '@angular/core';
import { NavController,NavParams,ToastController } from 'ionic-angular';
import { NoteAddPage } from '../noteAdd/noteAdd';
import { NoteDetPage } from '../noteDet/noteDet';
import { SvHostService } from '../../app/services/servHost.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-modulenotes',
  templateUrl: 'moduleNotes.html'
})
export class ModuleNotesPage {

	modul:any;
  apiUrl= SvHostService.serverhost;
  notes:any;
  initN:any;
  iduser:any;
  constructor(public navCtrl: NavController, public http:HttpClient,public params:NavParams,public toastCtrl: ToastController) {
    this.modul=params.get('item');
  	this.iduser=params.get('userid');
    
  }

  ionViewDidEnter() {
    this.listthenotes();
    
}

listthenotes(){

  return new Promise(resolve => {
      this.http.get(this.apiUrl+"/note.php?idm="+this.modul.id_module).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    }).then(res => {
      this.notes=res['notes'];
      this.initN=res['notes'];

    });
}

addNote(){
    this.navCtrl.push(NoteAddPage, { idmodule : this.modul.id_module, userid : this.iduser});
 }

 displayNoteDet(inote){
    this.navCtrl.push(NoteDetPage, { note : inote});
}

 deleteNote(id){
  var reponse;
  var data = "?id="+id;
  var config = {headers : {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}};
  return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrl+'/note.php'+data , config)
        .subscribe(res => {
          resolve(res);
          reponse=res;
          if (reponse.connection == "La Note a été bien Supprimé") {
          this.notes = this.notes.filter(item => item.id_note!==id);
          this.inscriptionreussit(reponse.connection);
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

initializeItems() {
    this.notes=this.initN;
    
  }

searchItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.notes= this.notes.filter(item => item.titre.toLowerCase().includes(val.toLowerCase()));
    }
  }

}
