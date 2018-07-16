import { Component } from '@angular/core';
import { NavController,NavParams,Platform,ToastController,ActionSheetController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ModuleDetPage } from '../ModuleDet/ModuleDet';
import { ModuleNotesPage } from '../moduleNotes/moduleNotes';
import { SvHostService } from '../../app/services/servHost.service';
import { ModuleAddPage } from '../ModuleAdd/ModuleAdd';
import { NoteAddPage } from '../noteAdd/noteAdd';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Modules:any;
  initM:any;
  apiUrl= SvHostService.serverhost;
  id="";
  notlookin=1;

  constructor(public navCtrl: NavController,public platform: Platform,public toastCtrl: ToastController,
    public actionsheetCtrl: ActionSheetController,public params:NavParams,private storage: Storage,public http:HttpClient) {
  	
  }

ionViewDidEnter() {
    this.showModules();
    this.notlookin=0;
}



  ngOnInit(){
    this.storage.get('profilId').then((val) => {  
      this.id=val;console.log('your id',val);
      this.showModules(); 
    });
  }

  showModules(){
    
    var don="?ide="+this.id;
    console.log(this.apiUrl+"/module.php"+don);
    return new Promise(resolve => {
      this.http.get(this.apiUrl+"/module.php"+don).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    }).then(res => {
      this.Modules=res['modules'];
      this.initM=res['modules'];
      console.log(res);

    });
  }

  editItem(itemtoedit) {
    this.navCtrl.push(ModuleAddPage,{ item : itemtoedit ,userid : this.id});
  }

  viewItemDet(itemtoview) {
    this.navCtrl.push(ModuleDetPage,{ item : itemtoview ,userid : this.id});
  }

  viewItemNotes(itemtoview) {
    this.navCtrl.push(ModuleNotesPage,{ item : itemtoview,userid : this.id});
  }

  addModule(){
    this.navCtrl.push(ModuleAddPage, { userid : this.id});
  }
  
  addNote(){
    this.navCtrl.push(NoteAddPage, { idmodule : null,userid : this.id});
  }

  initializeItems() {
    this.Modules=this.initM;
    this.notlookin=0;
  }

  searchItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.notlookin=1;
      this.Modules= this.Modules.filter(item => item.module.toLowerCase().includes(val.toLowerCase()));
    }
  }


deletModule(id){

    var reponse;
  var data = "?id="+id;
 var config = {headers : {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}};
  return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrl+'/module.php'+data , config)
        .subscribe(res => {
          resolve(res);
          reponse=res;
          if (reponse.connection == "Le module a été bien supprimer") {
          this.inscriptionreussit(reponse.connection);
          this.Modules= this.Modules.filter(item => item.id_module!==id );
          this.initM= this.initM.filter(item => item.id_module!==id );
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


openMenu(mod) {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Options',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Supprimer',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            this.deletModule(mod.id_module);
          }
        },
        {
          text: 'Editer',
          icon: !this.platform.is('ios') ? 'md-create' : null,
          handler: () => {
            this.editItem(mod);
          }
        },
        {
          text: 'list des Notes',
          icon: !this.platform.is('ios') ? 'copy' : null,
          handler: () => {
            this.viewItemNotes(mod);
          }
        },
        {
          text: 'Details',
          icon: !this.platform.is('ios') ? 'md-list-box' : null,
          handler: () => {
            this.viewItemDet(mod);
          }
        },
        {
          text: 'Annuler',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }

}
