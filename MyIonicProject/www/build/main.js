webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notes_notes__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__notes_notes__["a" /* NotesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\LAB\MyIonicProject\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Modules" tabIcon="albums"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Notes" tabIcon="copy"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\LAB\MyIonicProject\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteDetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_servHost_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoteDetPage = (function () {
    function NoteDetPage(navCtrl, http, params, toastCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.params = params;
        this.toastCtrl = toastCtrl;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__app_services_servHost_service__["a" /* SvHostService */].serverhost;
        this.edited = 0;
        this.note = params.get('note');
    }
    NoteDetPage.prototype.ionViewDidEnter = function () {
        var element = document.getElementById('desInputBox');
        var textarea = element.getElementsByTagName('textarea')[0];
        var sizei = document.body.clientHeight * 0.67;
        textarea.style.minHeight = sizei + "px";
        textarea.style.height = sizei + "px";
    };
    NoteDetPage.prototype.change = function () {
        this.edited = 1;
    };
    NoteDetPage.prototype.saveNote = function () {
        var _this = this;
        var reponse;
        var data = "titre=" + this.note.titre + "&note=" + this.note.body + "&id=" + this.note.id_note;
        var config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' } };
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.apiUrl + '/note.php', data, config)
                .subscribe(function (res) {
                resolve(res);
                console.log(res);
                reponse = res;
                if (reponse.connection == "La Note a été bien enregistrer") {
                    _this.inscriptionreussit(reponse.connection);
                    _this.navCtrl.pop();
                    console.log(res);
                }
                else {
                    _this.inscriptionreussit(reponse.connection);
                    console.log(res);
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    NoteDetPage.prototype.inscriptionreussit = function (resp) {
        var toast = this.toastCtrl.create({
            message: resp,
            duration: 3000
        });
        toast.present();
    };
    NoteDetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noteDet',template:/*ion-inline-start:"C:\LAB\MyIonicProject\src\pages\noteDet\noteDet.html"*/'<ion-header>\n\n<ion-navbar color="primary">\n\n<ion-toolbar >\n\n        <ion-title>Note</ion-title>\n\n    <ion-buttons *ngIf="edited==1"  end>\n\n      <button ion-button icon-only color="royal" (click)="saveNote()">\n\n        <ion-icon name="checkmark"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n<div style="height: 100%">\n\n<ion-input type="titre" style="font-size: 1.3em" text-center [(ngModel)]="note.titre" placeholder="Titre ..." name="titre"></ion-input>\n\n<hr>\n\n<ion-item>\n\n<ion-textarea type="titre" id="desInputBox" [(ngModel)]="note.body" (input)="change()" placeholder="Enter Votre Note ..." name="titre"></ion-textarea>		\n\n</ion-item>\n\n\n\n</div>\n\n\n\n\n\n  \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\LAB\MyIonicProject\src\pages\noteDet\noteDet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], NoteDetPage);
    return NoteDetPage;
}());

//# sourceMappingURL=noteDet.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleNotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noteAdd_noteAdd__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__noteDet_noteDet__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_servHost_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModuleNotesPage = (function () {
    function ModuleNotesPage(navCtrl, http, params, toastCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.params = params;
        this.toastCtrl = toastCtrl;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__app_services_servHost_service__["a" /* SvHostService */].serverhost;
        this.modul = params.get('item');
        this.iduser = params.get('userid');
    }
    ModuleNotesPage.prototype.ionViewDidEnter = function () {
        this.listthenotes();
    };
    ModuleNotesPage.prototype.listthenotes = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + "/note.php?idm=" + _this.modul.id_module).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        }).then(function (res) {
            _this.notes = res['notes'];
            _this.initN = res['notes'];
        });
    };
    ModuleNotesPage.prototype.addNote = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__noteAdd_noteAdd__["a" /* NoteAddPage */], { idmodule: this.modul.id_module, userid: this.iduser });
    };
    ModuleNotesPage.prototype.displayNoteDet = function (inote) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__noteDet_noteDet__["a" /* NoteDetPage */], { note: inote });
    };
    ModuleNotesPage.prototype.deleteNote = function (id) {
        var _this = this;
        var reponse;
        var data = "?id=" + id;
        var config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' } };
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.apiUrl + '/note.php' + data, config)
                .subscribe(function (res) {
                resolve(res);
                reponse = res;
                if (reponse.connection == "La Note a été bien Supprimé") {
                    _this.notes = _this.notes.filter(function (item) { return item.id_note !== id; });
                    _this.inscriptionreussit(reponse.connection);
                }
                else {
                    _this.inscriptionreussit(reponse.connection);
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    ModuleNotesPage.prototype.inscriptionreussit = function (resp) {
        var toast = this.toastCtrl.create({
            message: resp,
            duration: 3000
        });
        toast.present();
    };
    ModuleNotesPage.prototype.initializeItems = function () {
        this.notes = this.initN;
    };
    ModuleNotesPage.prototype.searchItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.notes = this.notes.filter(function (item) { return item.titre.toLowerCase().includes(val.toLowerCase()); });
        }
    };
    ModuleNotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modulenotes',template:/*ion-inline-start:"C:\LAB\MyIonicProject\src\pages\moduleNotes\moduleNotes.html"*/'<ion-header>\n\n\n\n<ion-toolbar color="primary">\n\n    <ion-buttons end>\n\n    <button ion-button icon-only (click)="addNote()" color="royal">\n\n        <ion-icon name="ios-create-outline"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  <ion-navbar color="primary">\n\n    <ion-title>{{modul.module}}</ion-title>\n\n  </ion-navbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<ion-searchbar placeholder="Rechercher" [showCancelButton]="shouldShowCancel" (ionInput)="searchItems($event)">\n\n</ion-searchbar>\n\n\n\n<ion-list>\n\n\n\n<ion-item-sliding *ngFor="let note of notes">\n\n    <ion-item (click)="displayNoteDet(note)">\n\n      <ion-avatar item-start>\n\n      <ion-icon color="primary" style="font-size: 50px" name="clipboard"></ion-icon>\n\n    </ion-avatar>\n\n    <h2>{{note.titre}}</h2>\n\n    <div align="right">\n\n       <ion-note>{{note.cretdate}}</ion-note>\n\n    </div>\n\n    </ion-item>\n\n    <ion-item-options side="left">\n\n      <button ion-button color="danger" (click)="deleteNote(note.id_note)">\n\n      <ion-icon color="light" name="trash"></ion-icon>\n\n      Supprimer\n\n      </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n\n\n\n\n\n\n  \n\n</ion-list>\n\n  \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\LAB\MyIonicProject\src\pages\moduleNotes\moduleNotes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ModuleNotesPage);
    return ModuleNotesPage;
}());

//# sourceMappingURL=moduleNotes.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inscription_inscription__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_servHost_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = (function () {
    function LoginPage(navCtrl, http, appCtrl, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.appCtrl = appCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__app_services_servHost_service__["a" /* SvHostService */].serverhost;
        this.img = "assets/imgs/logo.png";
        this.email = 'hello@hello.com';
        this.password = 'hello';
    }
    LoginPage.prototype.connecter = function () {
        var _this = this;
        var reponse;
        var donnee = "?email=" + this.email + "&password=" + this.password;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + "/user.php" + donnee).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        }).then(function (res) {
            reponse = res;
            if (reponse.connection == "connecter") {
                _this.showMessage("Bienvenu " + reponse.profil.nom);
                _this.storage.set('loggedIn', 'true');
                _this.storage.set('profilId', reponse.profil.id);
                _this.storage.set('usernam', reponse.profil.nom);
                _this.storage.set('userpren', reponse.profil.prenom);
                _this.storage.set('useremail', reponse.profil.email).then(function (res) {
                    _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                    _this.navCtrl.popToRoot();
                });
            }
            else {
                _this.showMessage(reponse.connection);
                console.log(res);
            }
            console.log(res);
        });
    };
    LoginPage.prototype.showMessage = function (resp) {
        var toast = this.toastCtrl.create({
            message: resp,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    LoginPage.prototype.showInscription = function () {
        //logic
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inscription_inscription__["a" /* InscriptionPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\LAB\MyIonicProject\src\pages\login\login.html"*/'\n\n\n\n<ion-content padding style="background: linear-gradient(180deg, #2196F3, #00bcd4);">\n\n  <br>\n\n  <ion-grid>\n\n   <ion-row>\n\n   <ion-col col-2 align="center">\n\n      \n\n    </ion-col>\n\n    <ion-col col-8 align="center">\n\n<img src="{{img}}">\n\n<hr>    \n\n      <div style="height: 100%">\n\n      <a>\n\n<ion-icon color="light" style="font-size: 90px" name="contact"></ion-icon>\n\n<br>\n\n\n\n    </a>\n\n    </div>\n\n    \n\n    </ion-col>\n\n\n\n    <ion-col col-2 align="center">\n\n      \n\n    </ion-col>\n\n    </ion-row>\n\n    </ion-grid>\n\n    <br>\n\n    <br>\n\n    <div id="container" align="center">\n\n    <ion-list>\n\n      <ion-item id="rounded">\n\n      <ion-label color="light"><ion-icon name="mail"></ion-icon></ion-label>\n\n    <ion-input type="text"  placeholder="E-mail" [(ngModel)]="email" name="email"  style="color:white"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item id="rounded">\n\n      <ion-label color="light"><ion-icon name="key"></ion-icon></ion-label>\n\n  <ion-input type="password" placeholder="Password" [(ngModel)]="password" name="password" style="color:white;"></ion-input>\n\n      </ion-item>     \n\n    \n\n\n\n    </ion-list>\n\n\n\n\n\n    <br>\n\n    <br>\n\n<div style="width: 70%">\n\n<button ion-button large block round color="login" (click)="connecter()" >Se Connecter</button>\n\n<br>\n\n<button ion-button large block outline round (click)="showInscription()" color="light">Inscription</button>  \n\n</div>\n\n\n\n  </div>\n\n\n\n<br>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\LAB\MyIonicProject\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvHostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SvHostService = (function () {
    function SvHostService() {
    }
    SvHostService.serverhost = 'http://localhost/noteappapi';
    SvHostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], SvHostService);
    return SvHostService;
}());

//# sourceMappingURL=servHost.service.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_servHost_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__noteDet_noteDet__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__noteAdd_noteAdd__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NotesPage = (function () {
    function NotesPage(http, storage, toastCtrl, navCtrl) {
        this.http = http;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.id = "";
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__app_services_servHost_service__["a" /* SvHostService */].serverhost;
        this.notlookin = 1;
    }
    NotesPage.prototype.ionViewDidEnter = function () {
        this.showNotes();
        this.notlookin = 0;
    };
    NotesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('profilId').then(function (val) {
            _this.id = val;
            _this.showNotes();
        });
    };
    NotesPage.prototype.showNotes = function () {
        var _this = this;
        var don = "?idetd=" + this.id;
        console.log(this.apiUrl + "/note.php" + don);
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + "/note.php" + don).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        }).then(function (res) {
            _this.notes = res['notes'];
            _this.initN = res['notes'];
            console.log(res);
        });
    };
    NotesPage.prototype.displayNoteDet = function (inote) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__noteDet_noteDet__["a" /* NoteDetPage */], { note: inote });
    };
    NotesPage.prototype.deleteNote = function (id) {
        var _this = this;
        var reponse;
        var data = "?id=" + id;
        var config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' } };
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.apiUrl + '/note.php' + data, config)
                .subscribe(function (res) {
                resolve(res);
                reponse = res;
                if (reponse.connection == "La Note a été bien Supprimé") {
                    _this.notes = _this.notes.filter(function (item) { return item.id_note !== id; });
                    _this.initN = _this.initN.filter(function (item) { return item.id_note !== id; });
                    _this.inscriptionreussit(reponse.connection);
                }
                else {
                    _this.inscriptionreussit(reponse.connection);
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    NotesPage.prototype.inscriptionreussit = function (resp) {
        var toast = this.toastCtrl.create({
            message: resp,
            duration: 3000
        });
        toast.present();
    };
    NotesPage.prototype.addNote = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__noteAdd_noteAdd__["a" /* NoteAddPage */], { idmodule: null, userid: this.id });
    };
    NotesPage.prototype.initializeItems = function () {
        this.notes = this.initN;
    };
    NotesPage.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.notlookin = 1;
            this.notes = this.notes.filter(function (item) { return item.titre.toLowerCase().includes(val.toLowerCase()); });
        }
    };
    NotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notes',template:/*ion-inline-start:"C:\LAB\MyIonicProject\src\pages\notes\notes.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addNote()" color="royal">\n        <ion-icon name="ios-create-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n      <ion-title align="center">Mes Notes</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content >\n  <ion-searchbar placeholder="Rechercher" [showCancelButton]="shouldShowCancel" (ionInput)="getItems($event)">\n  </ion-searchbar>\n  <br>\n  <div *ngIf="notlookin==1 && notes?.length == 0" col-12 align="center">\n    <p>Pas de resultat</p>\n  </div>\n\n<ion-card *ngFor="let note of notes">\n  <ion-card-header color="primary">\n    <a (click)="displayNoteDet(note)"><b>{{note.titre}}</b></a>\n    <a (click)="deleteNote(note.id_note)">\n    <ion-icon color="danger" style="float: right" name="trash" small></ion-icon>\n    </a>\n  </ion-card-header>\n  <ion-card-content (click)="displayNoteDet(note)">\n    <p class="testing">\n      {{note.body}}\n    </p>\n    <div align="right">\n    <ion-note small>\n      {{note.cretdate}}\n    </ion-note>\n    </div>\n  </ion-card-content>\n</ion-card>\n<!--\n  <ion-list>\n    <ion-item-sliding *ngFor="let note of notes">\n      <ion-item (click)="displayNoteDet(note)">\n        <h2 style="font-size: 20px">{{note.titre}}</h2>\n        <p style="padding: 4px;color: blue">{{note.cretdate}}</p>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="danger" (click)="deleteNote(note.id_note)">\n          <ion-icon color="light" name="trash"></ion-icon>\n          Supprimer\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>-->\n</ion-content>\n'/*ion-inline-end:"C:\LAB\MyIonicProject\src\pages\notes\notes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], NotesPage);
    return NotesPage;
}());

//# sourceMappingURL=notes.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MouleModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_servHost_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MouleModal = (function () {
    function MouleModal(http, params, viewCtrl) {
        this.http = http;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.id = '';
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__app_services_servHost_service__["a" /* SvHostService */].serverhost;
        this.id = params.get('userid');
    }
    MouleModal.prototype.ngOnInit = function () {
        this.showModules();
    };
    MouleModal.prototype.showModules = function () {
        var _this = this;
        var don = "?ide=" + this.id;
        console.log(this.apiUrl + "/module.php" + don);
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + "/module.php" + don).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        }).then(function (res) {
            _this.Modules = res['modules'];
        });
    };
    MouleModal.prototype.dismiss = function (idm, modulep) {
        console.log(idm);
        var data = { 'idm': idm, 'module': modulep };
        this.viewCtrl.dismiss(data);
    };
    MouleModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mouleMChoix-page',template:/*ion-inline-start:"C:\LAB\MyIonicProject\src\pages\modalsU\mouleMChoix.html"*/'<ion-header>\n\n<ion-toolbar color="primary">\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="dismiss(\'\',\'\')" color="royal">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-navbar>\n\n    <ion-title align="center" >Modules</ion-title>\n\n  </ion-navbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <p>Selectionner un Module</p>\n\n  <ion-list>\n\n  <ion-item-group *ngFor="let module of Modules">\n\n<ion-item (click)="dismiss(module.id_module,module.module)">\n\n    <ion-avatar item-start>\n\n      <ion-icon color="primary" style="font-size: 50px" name="albums"></ion-icon>\n\n    </ion-avatar>\n\n    <h2>{{module.module}}</h2>\n\n    <p>{{module.description}}</p>\n\n  </ion-item>\n\n  </ion-item-group>\n\n</ion-list>\n\n\n\n    </ion-content>'/*ion-inline-end:"C:\LAB\MyIonicProject\src\pages\modalsU\mouleMChoix.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], MouleModal);
    return MouleModal;
}());

//# sourceMappingURL=mouleMChoix.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ModuleDet_ModuleDet__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__moduleNotes_moduleNotes__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_servHost_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ModuleAdd_ModuleAdd__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__noteAdd_noteAdd__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, platform, toastCtrl, actionsheetCtrl, params, storage, http) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.params = params;
        this.storage = storage;
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_5__app_services_servHost_service__["a" /* SvHostService */].serverhost;
        this.id = "";
        this.notlookin = 1;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.showModules();
        this.notlookin = 0;
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('profilId').then(function (val) {
            _this.id = val;
            console.log('your id', val);
            _this.showModules();
        });
    };
    HomePage.prototype.showModules = function () {
        var _this = this;
        var don = "?ide=" + this.id;
        console.log(this.apiUrl + "/module.php" + don);
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + "/module.php" + don).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        }).then(function (res) {
            _this.Modules = res['modules'];
            _this.initM = res['modules'];
            console.log(res);
        });
    };
    HomePage.prototype.editItem = function (itemtoedit) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__ModuleAdd_ModuleAdd__["a" /* ModuleAddPage */], { item: itemtoedit, userid: this.id });
    };
    HomePage.prototype.viewItemDet = function (itemtoview) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ModuleDet_ModuleDet__["a" /* ModuleDetPage */], { item: itemtoview, userid: this.id });
    };
    HomePage.prototype.viewItemNotes = function (itemtoview) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__moduleNotes_moduleNotes__["a" /* ModuleNotesPage */], { item: itemtoview, userid: this.id });
    };
    HomePage.prototype.addModule = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__ModuleAdd_ModuleAdd__["a" /* ModuleAddPage */], { userid: this.id });
    };
    HomePage.prototype.addNote = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__noteAdd_noteAdd__["a" /* NoteAddPage */], { idmodule: null, userid: this.id });
    };
    HomePage.prototype.initializeItems = function () {
        this.Modules = this.initM;
        this.notlookin = 0;
    };
    HomePage.prototype.searchItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.notlookin = 1;
            this.Modules = this.Modules.filter(function (item) { return item.module.toLowerCase().includes(val.toLowerCase()); });
        }
    };
    HomePage.prototype.deletModule = function (id) {
        var _this = this;
        var reponse;
        var data = "?id=" + id;
        var config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' } };
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.apiUrl + '/module.php' + data, config)
                .subscribe(function (res) {
                resolve(res);
                reponse = res;
                if (reponse.connection == "Le module a été bien supprimer") {
                    _this.inscriptionreussit(reponse.connection);
                    _this.Modules = _this.Modules.filter(function (item) { return item.id_module !== id; });
                    _this.initM = _this.initM.filter(function (item) { return item.id_module !== id; });
                }
                else {
                    _this.inscriptionreussit(reponse.connection);
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    HomePage.prototype.inscriptionreussit = function (resp) {
        var toast = this.toastCtrl.create({
            message: resp,
            duration: 3000
        });
        toast.present();
    };
    HomePage.prototype.openMenu = function (mod) {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Options',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Supprimer',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        _this.deletModule(mod.id_module);
                    }
                },
                {
                    text: 'Editer',
                    icon: !this.platform.is('ios') ? 'md-create' : null,
                    handler: function () {
                        _this.editItem(mod);
                    }
                },
                {
                    text: 'list des Notes',
                    icon: !this.platform.is('ios') ? 'copy' : null,
                    handler: function () {
                        _this.viewItemNotes(mod);
                    }
                },
                {
                    text: 'Details',
                    icon: !this.platform.is('ios') ? 'md-list-box' : null,
                    handler: function () {
                        _this.viewItemDet(mod);
                    }
                },
                {
                    text: 'Annuler',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\LAB\MyIonicProject\src\pages\home\home.html"*/'<ion-header>\n<ion-toolbar color="primary">\n    <ion-buttons end>\n    <button ion-button icon-only (click)="addNote()" color="royal">\n        <ion-icon name="ios-create-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  \n    <ion-title align="center" >Mes Modules</ion-title>\n  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<ion-searchbar placeholder="Rechercher"  [showCancelButton]="shouldShowCancel" (ionInput)="searchItems($event)">\n</ion-searchbar>\n\n  <ion-grid>\n   <ion-row>\n   \n   <ion-col *ngIf="notlookin==1 && Modules?.length == 0" col-12 align="center">\n        <p>Pas de resultat</p>\n    </ion-col>\n\n    <ion-col *ngIf="notlookin==0" col-4 align="center">\n\n<ion-avatar (click)="addModule()">\n      <img  src="assets/imgs/add.png">\n      \n    </ion-avatar><br>\n    <a (click)="addModule()">Ajouter</a>\n    </ion-col>\n\n\n   \n      \n    <ion-col *ngFor="let module of Modules" col-4 align="center">\n    <ion-avatar (press)="openMenu(module)" (click)="viewItemNotes(module)">\n      <img  src="{{module.image}}">\n      \n    </ion-avatar><br>\n    <a (press)="openMenu(module)" (click)="viewItemNotes(module)">{{module.module}}</a>\n    </ion-col>\n\n    </ion-row>\n    </ion-grid>\n  \n</ion-content>\n'/*ion-inline-end:"C:\LAB\MyIonicProject\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleDetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_servHost_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__moduleNotes_moduleNotes__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModuleDetPage = (function () {
    function ModuleDetPage(navCtrl, http, params, toastCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.params = params;
        this.toastCtrl = toastCtrl;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__app_services_servHost_service__["a" /* SvHostService */].serverhost;
        this.modul = params.get('item');
    }
    ModuleDetPage.prototype.showNotes = function (itemtoview) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__moduleNotes_moduleNotes__["a" /* ModuleNotesPage */], { item: itemtoview, userid: this.modul.id_module });
    };
    ModuleDetPage.prototype.deletModule = function (id) {
        var _this = this;
        var reponse;
        var data = "?id=" + id;
        var config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' } };
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.apiUrl + '/module.php' + data, config)
                .subscribe(function (res) {
                resolve(res);
                console.log(res);
                reponse = res;
                if (reponse.connection == "Le module a été bien supprimer") {
                    _this.inscriptionreussit(reponse.connection);
                    _this.navCtrl.pop();
                    console.log(res);
                }
                else {
                    _this.inscriptionreussit(reponse.connection);
                    console.log(res);
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    ModuleDetPage.prototype.inscriptionreussit = function (resp) {
        var toast = this.toastCtrl.create({
            message: resp,
            duration: 3000
        });
        toast.present();
    };
    ModuleDetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-moduledet',template:/*ion-inline-start:"C:\LAB\MyIonicProject\src\pages\ModuleDet\ModuleDet.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n      <ion-title align="center">Details</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n   <ion-row justify-content-right>\n\n    <ion-col col-6 align="center">\n\n    <ion-avatar >\n\n      <img  src="{{modul.image}}">\n\n    </ion-avatar>\n\n    </ion-col>\n\n    <ion-col col-5 align="center">\n\n    <button ion-button color="energized" (click)="showNotes(modul)" icon-left block>\n\n    <ion-icon name="paper"></ion-icon>\n\n      Notes\n\n  </button>\n\n  <br>\n\n  <button ion-button color="danger" (click)="deletModule(modul.id_module)" icon-left block clear>\n\n    <ion-icon name="trash"></ion-icon>\n\n    Supprimer\n\n  </button>\n\n    \n\n\n\n    </ion-col>\n\n </ion-row>\n\n</ion-grid>\n\n\n\n<ion-label stacked>Module</ion-label>\n\n<div>\n\n<p>{{modul.module}}</p>\n\n</div>\n\n\n\n\n\n<ion-label stacked>Description</ion-label>\n\n<div>\n\n        <p>{{modul.description}}</p>\n\n</div>\n\n\n\n\n\n<ion-grid>\n\n   <ion-row>\n\n    \n\n    <ion-col col-4  align="center">\n\n  <ion-row>\n\n    <ion-col align="center">\n\n      <ion-icon name="calendar"></ion-icon>\n\n      Crée le\n\n    </ion-col>\n\n  </ion-row>\n\n    <div style="border-right: 1px solid lightgrey">\n\n    <ion-row style="border-bottom: 1px solid lightgrey">\n\n    <ion-col align="right">\n\n      <strong>{{modul.dd}}</strong>\n\n    </ion-col>\n\n    <ion-col align="left">\n\n      <strong>{{modul.md}}</strong>\n\n    </ion-col></ion-row>\n\n    <ion-row>\n\n    <ion-col align="center">\n\n      <strong>{{modul.yd}}</strong>\n\n    </ion-col>\n\n  </ion-row>\n\n  </div>\n\n    </ion-col>\n\n\n\n\n\n\n\n<ion-col col-4 align="center">\n\n  <ion-row>\n\n    <ion-col align="center">\n\n      <ion-icon name="copy"></ion-icon>\n\n      Notes\n\n    </ion-col>\n\n  </ion-row>\n\n    <ion-row align="center" >\n\n    <ion-col align="center">\n\n      <a><strong>{{modul.nbrnotes}}</strong></a>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row >\n\n    <ion-col align="center">\n\n      <ion-icon name="stats"></ion-icon>\n\n    </ion-col>\n\n  </ion-row>\n\n    </ion-col>\n\n\n\n\n\n <ion-col col-4  align="center">\n\n  <ion-row>\n\n    <ion-col align="center">\n\n      <ion-icon name="calendar"></ion-icon>\n\n      Modifier le\n\n    </ion-col>\n\n  </ion-row>\n\n  <div style="border-left: 1px solid lightgrey">\n\n    <ion-row style="border-bottom: 1px solid lightgrey">\n\n    <ion-col align="right">\n\n      <strong>{{modul.df}}</strong>\n\n    </ion-col>\n\n    <ion-col align="left">\n\n      <strong>{{modul.mf}}</strong>\n\n    </ion-col></ion-row>\n\n    <ion-row>\n\n    <ion-col align="center">\n\n      <strong>{{modul.yf}}</strong>\n\n    </ion-col>\n\n  </ion-row>\n\n  </div>\n\n    \n\n    </ion-col>\n\n\n\n </ion-row>\n\n</ion-grid>\n\n  \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\LAB\MyIonicProject\src\pages\ModuleDet\ModuleDet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ModuleDetPage);
    return ModuleDetPage;
}());

//# sourceMappingURL=ModuleDet.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_servHost_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modalsU_theimges__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModuleAddPage = (function () {
    function ModuleAddPage(navCtrl, http, modalCtrl, params, toastCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.params = params;
        this.toastCtrl = toastCtrl;
        this.img = "assets/imgs/cumpico.png";
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__app_services_servHost_service__["a" /* SvHostService */].serverhost;
        this.miseajour = 'no';
        this.id = params.get('userid');
        if (params.get('item') != undefined) {
            var modul = params.get('item');
            this.titre = modul.module;
            this.description = modul.description;
            this.img = modul.image;
            this.idm = modul.id_module;
            this.miseajour = 'yes';
        }
    }
    ModuleAddPage.prototype.chooseImage = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modalsU_theimges__["a" /* ImageModal */]);
        profileModal.onDidDismiss(function (data) {
            if (data.source != '') {
                _this.img = data.source;
            }
        });
        profileModal.present();
    };
    ModuleAddPage.prototype.tryToSave = function () {
        if (this.miseajour == 'no') {
            this.saveModul();
        }
        else
            this.updateModule();
    };
    ModuleAddPage.prototype.updateModule = function () {
        var _this = this;
        var reponse;
        var data = "module=" + this.titre + "&description=" + this.description + "&image=" + this.img + "&idm=" + this.idm;
        var config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' } };
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.apiUrl + '/module.php', data, config)
                .subscribe(function (res) {
                resolve(res);
                reponse = res;
                if (reponse.connection == "Le Module a été bien enregistrer") {
                    _this.inscriptionreussit(reponse.connection);
                    _this.navCtrl.pop();
                }
                else {
                    _this.inscriptionreussit(reponse.connection);
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    ModuleAddPage.prototype.saveModul = function () {
        var _this = this;
        var reponse;
        var data = "module=" + this.titre + "&description=" + this.description + "&image=" + this.img + "&id=" + this.id;
        var config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' } };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/module.php', data, config)
                .subscribe(function (res) {
                resolve(res);
                reponse = res;
                if (reponse.connection == "Le Module a été bien enregistrer") {
                    _this.inscriptionreussit(reponse.connection);
                    _this.navCtrl.pop();
                }
                else {
                    _this.inscriptionreussit(reponse.connection);
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    ModuleAddPage.prototype.inscriptionreussit = function (resp) {
        var toast = this.toastCtrl.create({
            message: resp,
            duration: 3000
        });
        toast.present();
    };
    ModuleAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-moduleAdd',template:/*ion-inline-start:"C:\LAB\MyIonicProject\src\pages\ModuleAdd\ModuleAdd.html"*/'<ion-header>\n\n<ion-navbar color="primary">\n\n<ion-toolbar >\n\n        <ion-title *ngIf="miseajour==\'no\'">Nouveau Module</ion-title>\n\n        <ion-title *ngIf="miseajour==\'yes\'">Modifier</ion-title>\n\n    <ion-buttons  end>\n\n      <button ion-button icon-only color="royal" (click)="tryToSave()">\n\n        <ion-icon name="done-all"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n\n\n  <ion-grid>\n\n   <ion-row justify-content-center>\n\n    <ion-col col-6 align="center">\n\n    <ion-avatar >\n\n      <img  src="{{img}}">\n\n      <ion-fab right bottom>\n\n    <button ion-fab mini (click)="chooseImage()"  style="margin-top:0px;margin-right:0px;padding-right:0px;padding-left:0px;">\n\n      <ion-icon name="more"></ion-icon>\n\n    </button>\n\n    </ion-fab>\n\n    </ion-avatar>\n\n    </ion-col>\n\n    </ion-row>\n\n</ion-grid>\n\n\n\n\n\n<ion-list>\n\n<ion-label stacked>Module</ion-label>\n\n<ion-item>\n\n\n\n<ion-input type="titre" [(ngModel)]="titre" placeholder="Enter Un titre" name="titre"></ion-input>\n\n</ion-item>\n\n<ion-label stacked>Description</ion-label>\n\n<ion-item>\n\n    <ion-textarea name="description" rows="5" [(ngModel)]="description" placeholder="Enter la description"></ion-textarea>\n\n</ion-item>\n\n </ion-list>\n\n\n\n\n\n\n\n\n\n<ion-grid>\n\n   <ion-row>\n\n    \n\n<ion-col col-4  align="center">\n\n  \n\n    \n\n</ion-col>\n\n\n\n<ion-col col-4 align="center">\n\n  \n\n</ion-col>\n\n\n\n\n\n<ion-col col-4  align="center">\n\n    \n\n</ion-col>\n\n\n\n </ion-row>\n\n</ion-grid>\n\n  \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\LAB\MyIonicProject\src\pages\ModuleAdd\ModuleAdd.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ModuleAddPage);
    return ModuleAddPage;
}());

//# sourceMappingURL=ModuleAdd.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_servHost_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageModal = (function () {
    function ImageModal(http, viewCtrl) {
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__app_services_servHost_service__["a" /* SvHostService */].serverhost;
    }
    ImageModal.prototype.ngOnInit = function () {
        this.showImages();
    };
    ImageModal.prototype.showImages = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + "/module.php").subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        }).then(function (res) {
            _this.images = res['images'];
            console.log(_this.images);
        });
    };
    ImageModal.prototype.dismiss = function (src) {
        console.log(src);
        var data = { 'source': src };
        this.viewCtrl.dismiss(data);
    };
    ImageModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'theimges',template:/*ion-inline-start:"C:\LAB\MyIonicProject\src\pages\modalsU\theimges.html"*/'<ion-header>\n\n<ion-toolbar color="primary">\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="dismiss(\'\')" color="royal">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-navbar>\n\n    <ion-title align="center" >Modules</ion-title>\n\n  </ion-navbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<h2>Select Image</h2>\n\n  <ion-grid>\n\n   <ion-row>\n\n    <ion-col *ngFor="let image of images" col-4 align="center">\n\n    <ion-avatar (click)="dismiss(apiUrl+\'/\'+image.src)">\n\n      <img  src="{{apiUrl+\'/\'+image.src}}">\n\n    </ion-avatar>\n\n    <br>\n\n    \n\n    </ion-col>\n\n\n\n    </ion-row>\n\n    </ion-grid>\n\n    </ion-content>'/*ion-inline-end:"C:\LAB\MyIonicProject\src\pages\modalsU\theimges.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], ImageModal);
    return ImageModal;
}());

//# sourceMappingURL=theimges.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfilePage = (function () {
    function ProfilePage(navCtrl, storage, appCtrl, alertCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.appCtrl = appCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.profile = { nom: " ", prenom: " ", email: " ", notes: "10", modules: "70" };
        this.pet = 'puppies';
        this.storage.get('usernam').then(function (val) { _this.profile.nom = val; });
        this.storage.get('profilId').then(function (val) { _this.profile.notes = val; });
        this.storage.get('userpren').then(function (val) { _this.profile.prenom = val; });
        this.storage.get('useremail').then(function (val) { _this.profile.email = val; });
    }
    ProfilePage.prototype.deconnecter = function () {
        this.storage.clear();
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        this.navCtrl.popToRoot();
    };
    ProfilePage.prototype.presentLoadingM = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Please wait...'
        });
        loading.present();
        setTimeout(function () {
            _this.deconnecter();
            loading.dismiss();
        }, 2000);
    };
    ProfilePage.prototype.logoutConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Voulez vous se deconnecter?',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.presentLoadingM();
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\LAB\MyIonicProject\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title align="center" >Profile</ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content>\n<ion-fab top right>\n    <button (click)="logoutConfirm()" ion-fab mini><ion-icon name="ios-log-out-outline"></ion-icon></button>\n</ion-fab>\n<div style="display: flex">\n<div align="center" style="margin: 5px auto">\n  <h1>\n    <ion-icon name="contact" color="primary" style="font-size: 4em"></ion-icon>\n  </h1>\n  <h1>{{profile.nom}} {{profile.prenom}}</h1>\n  <p>{{profile.email}}</p>\n</div>\n</div>\n<ion-grid>\n<ion-row justify-content-center>\n  <ion-col col-8>\n<hr>\n  </ion-col>\n</ion-row>\n   <ion-row justify-content-right>\n    <ion-col col-6 align="center">\n<div align="center">\n        <h1>\n        {{profile.notes}}\n        </h1>\n        Notes\n</div>\n    </ion-col>\n    <ion-col col-6 align="center">\n    <div align="center">\n        <h1>\n        {{profile.modules}}\n        </h1>\n        Modules\n</div>\n    </ion-col>\n </ion-row>\n</ion-grid>\n<br>\n<br>\n<br>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\LAB\MyIonicProject\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InscriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_servHost_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InscriptionPage = (function () {
    function InscriptionPage(navCtrl, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__app_services_servHost_service__["a" /* SvHostService */].serverhost;
        this.user = { nom: '', prenom: '', email: '', password: '', repassword: '' };
    }
    InscriptionPage.prototype.inscrir = function () {
        var _this = this;
        var reponse;
        var data = "nom=" + this.user.nom + "&prenom=" + this.user.prenom + "&email=" + this.user.email + "&password=" + this.user.password + "&repassword=" + this.user.repassword;
        var config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' } };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/user.php', data, config)
                .subscribe(function (res) {
                resolve(res);
                console.log(res);
                reponse = res;
                if (reponse.connection == "Inscription Reussit") {
                    _this.inscriptionreussit(reponse.connection);
                    _this.navCtrl.pop();
                    console.log(res);
                }
                else {
                    _this.inscriptionreussit(reponse.connection);
                    console.log(res);
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    InscriptionPage.prototype.inscriptionreussit = function (resp) {
        var toast = this.toastCtrl.create({
            message: resp,
            duration: 3000
        });
        toast.present();
    };
    InscriptionPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    InscriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inscription',template:/*ion-inline-start:"C:\LAB\MyIonicProject\src\pages\inscription\inscription.html"*/'\n\n\n\n<ion-content padding style="background: linear-gradient(180deg, #2196F3, #00bcd4);">\n\n  <br>\n\n  <ion-grid>\n\n   <ion-row>\n\n   <ion-col col-2 align="center">\n\n      \n\n    </ion-col>\n\n    <ion-col col-8 align="center">\n\n      <div style="height: 100%">\n\n      <a>\n\n<ion-icon color="light" style="font-size: 90px" name="contact"></ion-icon>\n\n<br>\n\n\n\n    </a>\n\n    </div>\n\n    \n\n    </ion-col>\n\n\n\n    <ion-col col-2 align="center">\n\n      \n\n    </ion-col>\n\n    </ion-row>\n\n    </ion-grid>\n\n    <br>\n\n    <br>\n\n    <div id="container" align="center">\n\n    <ion-list>\n\n      <ion-item id="rounded">\n\n      <ion-label color="light"><ion-icon name="contact"></ion-icon></ion-label>\n\n    <ion-input type="text" placeholder="Nom" [(ngModel)]="user.nom" name="nom" style="color:white"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item id="rounded">\n\n      <ion-label color="light"><ion-icon name="contact"></ion-icon></ion-label>\n\n    <ion-input type="text"  placeholder="Prenom" [(ngModel)]="user.prenom" name="prenom" class="text-input-ppp" style="color:white"></ion-input>\n\n    </ion-item>\n\n\n\n<ion-item id="rounded">\n\n      <ion-label color="light"><ion-icon name="mail"></ion-icon></ion-label>\n\n    <ion-input type="text"  placeholder="E-mail" [(ngModel)]="user.email" name="email"  style="color:white"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item id="rounded">\n\n      <ion-label color="light"><ion-icon name="key"></ion-icon></ion-label>\n\n    <ion-input type="password" placeholder="Mote de pass" [(ngModel)]="user.password" name="password" class="text-input-ppp" style="color:white"></ion-input>\n\n      </ion-item> \n\n\n\n      <ion-item id="rounded">\n\n      <ion-label color="light"><ion-icon name="key"></ion-icon></ion-label>\n\n    <ion-input type="password" placeholder="Retapez le Mote de pass" [(ngModel)]="user.repassword" name="repassword" class="text-input-ppp" style="color:white"></ion-input>\n\n      </ion-item>       \n\n    \n\n\n\n    </ion-list>\n\n    <br>\n\n<div style="width: 70%">\n\n<button ion-button large block round color="login" (click)="inscrir()" >S\'inscrire</button>\n\n<button ion-button large block clear round (click)="back()" color="light">Annuler</button> \n\n\n\n</div>\n\n  </div>\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\LAB\MyIonicProject\src\pages\inscription\inscription.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], InscriptionPage);
    return InscriptionPage;
}());

//# sourceMappingURL=inscription.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_notes_notes__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_inscription_inscription__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_ModuleDet_ModuleDet__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_moduleNotes_moduleNotes__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_ModuleAdd_ModuleAdd__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_noteAdd_noteAdd__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_noteDet_noteDet__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_modalsU_theimges__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_modalsU_mouleMChoix__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_servHost_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_splash_splash__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_notes_notes__["a" /* NotesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_inscription_inscription__["a" /* InscriptionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_ModuleDet_ModuleDet__["a" /* ModuleDetPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_ModuleAdd_ModuleAdd__["a" /* ModuleAddPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_moduleNotes_moduleNotes__["a" /* ModuleNotesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_noteAdd_noteAdd__["a" /* NoteAddPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_modalsU_theimges__["a" /* ImageModal */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modalsU_mouleMChoix__["a" /* MouleModal */],
                __WEBPACK_IMPORTED_MODULE_16__pages_noteDet_noteDet__["a" /* NoteDetPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_splash_splash__["a" /* Splash */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_notes_notes__["a" /* NotesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_inscription_inscription__["a" /* InscriptionPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_ModuleDet_ModuleDet__["a" /* ModuleDetPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_ModuleAdd_ModuleAdd__["a" /* ModuleAddPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_noteAdd_noteAdd__["a" /* NoteAddPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_moduleNotes_moduleNotes__["a" /* ModuleNotesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_modalsU_theimges__["a" /* ImageModal */],
                __WEBPACK_IMPORTED_MODULE_18__pages_modalsU_mouleMChoix__["a" /* MouleModal */],
                __WEBPACK_IMPORTED_MODULE_16__pages_noteDet_noteDet__["a" /* NoteDetPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_splash_splash__["a" /* Splash */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__services_servHost_service__["a" /* SvHostService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { Splash } from '../pages/splash/splash';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage, modalCtrl) {
        var _this = this;
        this.storage = storage;
        this.storage.get('loggedIn').then(function (valx) {
            if (valx) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
            }
        });
        platform.ready().then(function () {
            statusBar.styleDefault();
            //let splash = modalCtrl.create(Splash);
            //   splash.present();
            //splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\LAB\MyIonicProject\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\LAB\MyIonicProject\src\app\app.html"*/ //,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Splash; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Splash = (function () {
    function Splash(viewCtrl, splashScreen) {
        this.viewCtrl = viewCtrl;
        this.splashScreen = splashScreen;
    }
    Splash.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.splashScreen.hide();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 4000);
    };
    Splash = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"C:\LAB\MyIonicProject\src\pages\splash\splash.html"*/'<ion-content>\n \n 	<svg id="bars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.15 224.35">\n        <defs>\n            <style>.cls-1{fill:#dd238c;}.cls-2{fill:#ef4328;}.cls-3{fill:#7dd0df;}.cls-4{fill:#febf12;}.cls-5{fill:#282828;}</style>\n        </defs>\n        <title>ajmlogo</title>\n        <rect class="cls-1" x="27.22" width="20.06" height="163.78"/>\n        <rect class="cls-2" y="4" width="20.06" height="163.78"/>\n        <rect class="cls-3" x="13.9" y="13.1" width="20.06" height="163.78"/>\n        <rect class="cls-4" x="43.1" y="7.45" width="20.06" height="163.78"/>\n        \n    </svg>\n    <img class="cls-5" src="assets/imgs/logo.png">\n \n</ion-content>\n'/*ion-inline-end:"C:\LAB\MyIonicProject\src\pages\splash\splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], Splash);
    return Splash;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modalsU_mouleMChoix__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_servHost_service__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NoteAddPage = (function () {
    function NoteAddPage(navCtrl, http, modalCtrl, params, toastCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.params = params;
        this.toastCtrl = toastCtrl;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__app_services_servHost_service__["a" /* SvHostService */].serverhost;
        this.id = params.get('idmodule');
        this.iduser = params.get('userid');
    }
    NoteAddPage.prototype.ionViewDidEnter = function () {
        var element = document.getElementById('desInputBox');
        var textarea = element.getElementsByTagName('textarea')[0];
        var sizei = document.body.clientHeight * 0.67;
        textarea.style.minHeight = sizei + "px";
        textarea.style.height = sizei + "px";
    };
    NoteAddPage.prototype.tryToSave = function () {
        var _this = this;
        if (this.id != null) {
            this.saveNote();
        }
        else {
            var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modalsU_mouleMChoix__["a" /* MouleModal */], { userid: this.iduser });
            profileModal.onDidDismiss(function (data) {
                if (data.idm != '') {
                    _this.id = data.idm;
                    _this.inscriptionreussit('Vous avez choisie ' + data.module);
                    _this.saveNote();
                }
            });
            profileModal.present();
        }
    };
    NoteAddPage.prototype.saveNote = function () {
        var _this = this;
        var reponse;
        var data = "titre=" + this.titre + "&note=" + this.description + "&idm=" + this.id;
        var config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' } };
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/note.php', data, config)
                .subscribe(function (res) {
                resolve(res);
                console.log(res);
                reponse = res;
                if (reponse.connection == "La Note a été bien enregistrer") {
                    _this.inscriptionreussit(reponse.connection);
                    _this.navCtrl.pop();
                }
                else {
                    _this.inscriptionreussit(reponse.connection);
                    console.log(res);
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    NoteAddPage.prototype.inscriptionreussit = function (resp) {
        var toast = this.toastCtrl.create({
            message: resp,
            duration: 3000
        });
        toast.present();
    };
    NoteAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-noteAdd',template:/*ion-inline-start:"C:\LAB\MyIonicProject\src\pages\noteAdd\noteAdd.html"*/'<ion-header>\n\n<ion-navbar color="primary">\n\n<ion-toolbar >\n\n        <ion-title>Nouvelle Note</ion-title>\n\n    <ion-buttons  end>\n\n      <button ion-button icon-only color="royal" (click)="tryToSave()">\n\n        <ion-icon name="checkmark"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n<div style="height: 100%">\n\n<ion-input style="font-size: 1.3em" text-center [(ngModel)]="titre" placeholder="Titre ..." name="titre"></ion-input>\n\n<hr>\n\n<ion-item>\n\n<ion-textarea id="desInputBox" [(ngModel)]="description" placeholder="Enter Votre Note ..." name="titre"></ion-textarea>\n\n</ion-item>	\n\n</div>\n\n\n\n\n\n  \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\LAB\MyIonicProject\src\pages\noteAdd\noteAdd.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], NoteAddPage);
    return NoteAddPage;
}());

//# sourceMappingURL=noteAdd.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map