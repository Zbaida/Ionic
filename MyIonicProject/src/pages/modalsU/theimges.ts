import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { SvHostService } from '../../app/services/servHost.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'theimges',
  templateUrl: 'theimges.html'
})
export class ImageModal {

	images:any;
  apiUrl= SvHostService.serverhost;
  
  constructor(public http:HttpClient,public viewCtrl: ViewController) {
  	
  }

  ngOnInit(){
 	this.showImages();

  }

  showImages(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+"/module.php").subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    }).then(res => {
      this.images=res['images'];
      console.log(this.images);

    });
  }

  dismiss(src) {
  	console.log(src);
   let data = { 'source': src };
   this.viewCtrl.dismiss(data);
 }

}
