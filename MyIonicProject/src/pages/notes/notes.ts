import { Component } from '@angular/core';
import { NavController, ToastController} from 'ionic-angular';
import { SvHostService } from '../../app/services/servHost.service';
import { NoteDetPage } from '../noteDet/noteDet';
import { NoteAddPage } from '../noteAdd/noteAdd';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage {
	notes:any;
  initN:any;
	id="";
  apiUrl= SvHostService.serverhost;
  notlookin=1;
  
  constructor(public http:HttpClient,private storage: Storage,public toastCtrl:ToastController,public navCtrl: NavController) {
    
  }

ionViewDidEnter() {
    this.showNotes();
    this.notlookin=0;
}


ngOnInit(){
  this.storage.get('profilId').then((val) => {  
      this.id=val;
      this.showNotes(); 
    });
  }

showNotes(){
		var don="?idetd="+this.id;
    console.log(this.apiUrl+"/note.php"+don);
    return new Promise(resolve => {
      this.http.get(this.apiUrl+"/note.php"+don).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    }).then(res => {
      this.notes=res['notes'];
      this.initN=res['notes'];
      console.log(res);

    });
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
          this.initN = this.initN.filter(item => item.id_note!==id);
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

addNote(){
    this.navCtrl.push(NoteAddPage, { idmodule : null,userid : this.id});
  }

initializeItems() {
    this.notes=this.initN;
  }

getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.notlookin=1;
      this.notes= this.notes.filter(item => item.titre.toLowerCase().includes(val.toLowerCase()));
    }
  }


}
