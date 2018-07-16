import { Component } from '@angular/core';
import { ViewController,NavParams } from 'ionic-angular';
import { SvHostService } from '../../app/services/servHost.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'mouleMChoix-page',
  templateUrl: 'mouleMChoix.html'
})
export class MouleModal {
  id='';
	
  apiUrl= SvHostService.serverhost;
  Modules:any;

  constructor(public http:HttpClient,public params:NavParams,public viewCtrl: ViewController) {
  	this.id=params.get('userid');
  }

  ngOnInit(){
 	this.showModules();
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
    });
  }

  dismiss(idm,modulep) {
  	console.log(idm);
   let data = { 'idm': idm , 'module' : modulep};
   this.viewCtrl.dismiss(data);
 }

}
