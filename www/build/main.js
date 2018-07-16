webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__walkie_talkie_walkie_talkie__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__story_library_story_library__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage.prototype.sequeToStoryLibraryPage = function (event, item) {
        //this.navCtrl.setRoot(WalkieTalkiePage);//this one without back button
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__story_library_story_library__["a" /* StoryLibraryPage */], {
            item: item
        });
    };
    ListPage.prototype.sequeToWalkieTalkiePage = function (event, item) {
        //this.navCtrl.setRoot(WalkieTalkiePage);//this one without back button
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__walkie_talkie_walkie_talkie__["a" /* WalkieTalkiePage */], {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/northstarsystemsinc/Desktop/gitHub/bearApp/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar color=\'primary\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n  <ion-toolbar color=\'dark\'>\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n\n  <ion-card>\n    <img src="assets/imgs/education.png"/>\n    <div class="card-title">Education</div>\n    <div class="card-subtitle"> Bear Pal teach you simple math</div>\n  </ion-card>\n  <ion-card (click)="sequeToWalkieTalkiePage()">\n    <img src="assets/imgs/walkietalkie.jpg"/>\n    <div class="card-title">Walkie Talkie</div>\n    <div class="card-subtitle">Communcate between Bear Pal and Phone</div>\n  </ion-card>\n\n  <ion-card (click)="sequeToStoryLibraryPage()">\n    <img src="assets/imgs/storyLibrary.jpg"/>\n    <div class="card-title">Story Libary</div>\n    <div class="card-subtitle">Bear Pal tell story to you</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="assets/imgs/teethBushing.jpg"/>\n    <div class="card-title">Teeth Brushing</div>\n    <div class="card-subtitle">Bear Pal teach you how to brush your teeth</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="assets/imgs/game.jpg"/>\n    <div class="card-title">Game</div>\n    <div class="card-subtitle">Play game with bear pal</div>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/northstarsystemsinc/Desktop/gitHub/bearApp/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkieTalkiePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WalkieTalkiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalkieTalkiePage = (function () {
    function WalkieTalkiePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WalkieTalkiePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalkieTalkiePage');
    };
    WalkieTalkiePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-walkie-talkie',template:/*ion-inline-start:"/Users/northstarsystemsinc/Desktop/gitHub/bearApp/src/pages/walkie-talkie/walkie-talkie.html"*/'<!--\n  Generated template for the WalkieTalkiePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>walkieTalkie</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/northstarsystemsinc/Desktop/gitHub/bearApp/src/pages/walkie-talkie/walkie-talkie.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], WalkieTalkiePage);
    return WalkieTalkiePage;
}());

//# sourceMappingURL=walkie-talkie.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryLibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_streaming_media__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StoryLibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StoryLibraryPage = (function () {
    function StoryLibraryPage(streamingMedia) {
        this.streamingMedia = streamingMedia;
    }
    StoryLibraryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StoryLibraryPage');
    };
    StoryLibraryPage.prototype.jackAndTheBeanClick = function () {
        console.log("startVideo");
        var options = {
            successCallback: function () { console.log(); },
            errorCallback: function () { console.log(); },
            orientation: 'portrait'
        };
        this.streamingMedia.playVideo('https://firebasestorage.googleapis.com/v0/b/bearpal-8eaa1.appspot.com/o/Jack_and_The_Beanstalk.mp4?alt=media&token=f05cceb3-eba2-4cdf-b994-2467f1e9dcde', options);
    };
    StoryLibraryPage.prototype.nightBeforeChristmasClick = function () {
        console.log("startVideo");
        var options = {
            successCallback: function () { console.log(); },
            errorCallback: function () { console.log(); },
            orientation: 'portrait'
        };
        this.streamingMedia.playVideo('https://firebasestorage.googleapis.com/v0/b/bearpal-8eaa1.appspot.com/o/The_Night_Before_Christma.mp4?alt=media&token=de22579c-b3d3-4379-bf64-dd8f775cdda8', options);
    };
    StoryLibraryPage.prototype.nightNightCircusClick = function () {
        console.log("startVideo");
        var options = {
            successCallback: function () { console.log(); },
            errorCallback: function () { console.log(); },
            orientation: 'portrait'
        };
        this.streamingMedia.playVideo('https://firebasestorage.googleapis.com/v0/b/bearpal-8eaa1.appspot.com/o/Nighty_Night_Circus.mp4?alt=media&token=38a1160d-b5ae-424e-ad88-789c52ffceb5', options);
    };
    StoryLibraryPage.prototype.theUglyDuckingClick = function () {
        console.log("startVideo");
        var options = {
            successCallback: function () { console.log(); },
            errorCallback: function () { console.log(); },
            orientation: 'portrait'
        };
        this.streamingMedia.playVideo('https://firebasestorage.googleapis.com/v0/b/bearpal-8eaa1.appspot.com/o/The_Ugly_Duckling.mp4?alt=media&token=839be733-97d4-442d-bad0-84cbf7b40eb1', options);
    };
    StoryLibraryPage.prototype.threeLittlePigsClick = function () {
        console.log("startVideo");
        var options = {
            successCallback: function () { console.log(); },
            errorCallback: function () { console.log(); },
            orientation: 'portrait'
        };
        this.streamingMedia.playVideo('https://firebasestorage.googleapis.com/v0/b/bearpal-8eaa1.appspot.com/o/Three_Little_Pigs.mp4?alt=media&token=54d2828e-158f-49d4-9c53-6c7c8ae3e4f7', options);
    };
    StoryLibraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-story-library',template:/*ion-inline-start:"/Users/northstarsystemsinc/Desktop/gitHub/bearApp/src/pages/story-library/story-library.html"*/'<!--\n  Generated template for the StoryLibraryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Story-Library</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card (click)="theUglyDuckingClick()">\n    <img src="assets/imgs/duck.jpg"/>\n    <div class="card-title">The Ungly Ducking</div>\n    \n  </ion-card>\n\n<ion-card (click)="jackAndTheBeanClick()">\n    <img src="assets/imgs/jack.jpg"/>\n    <div class="card-title">Jack and the Beanstalk</div>\n    \n  </ion-card>\n\n<ion-card (click)="nightBeforeChristmasClick()">\n    <img src="assets/imgs/christmas.jpg"/>\n    <div class="card-title">The Night Before Christmas</div>\n    \n  </ion-card>\n\n  <ion-card (click)="nightNightCircusClick()">\n    <img src="assets/imgs/night.jpg"/>\n    <div class="card-title">Night Night Circus</div>\n    \n  </ion-card>\n   <ion-card (click)="threeLittlePigsClick()">\n    <img src="assets/imgs/pig.jpg"/>\n    <div class="card-title">Three Little Pigs</div>\n    \n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/northstarsystemsinc/Desktop/gitHub/bearApp/src/pages/story-library/story-library.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_streaming_media__["a" /* StreamingMedia */]])
    ], StoryLibraryPage);
    return StoryLibraryPage;
}());

//# sourceMappingURL=story-library.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(100);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.sequeToLinkPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/northstarsystemsinc/Desktop/gitHub/bearApp/src/pages/home/home.html"*/'<ion-header>\n  \n  \n</ion-header>\n\n<ion-content padding>\n  \n\n  <p padding>\n    Wellcome to Pal Bear App please input your name to Come to our jounary!\n  </p>\n\n  <ion-item padding>\n    <ion-label fixed>Username</ion-label>\n    <ion-input type="text" value=""></ion-input>\n  </ion-item>\n\n  <button  ion-button (click)="sequeToLinkPage()">Confirm</button>\n</ion-content>\n'/*ion-inline-end:"/Users/northstarsystemsinc/Desktop/gitHub/bearApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_walkie_talkie_walkie_talkie__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_story_library_story_library__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_streaming_media__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(196);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_walkie_talkie_walkie_talkie__["a" /* WalkieTalkiePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_story_library_story_library__["a" /* StoryLibraryPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_walkie_talkie_walkie_talkie__["a" /* WalkieTalkiePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_story_library_story_library__["a" /* StoryLibraryPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_streaming_media__["a" /* StreamingMedia */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_walkie_talkie_walkie_talkie__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_story_library_story_library__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'WalkieTalkie', component: __WEBPACK_IMPORTED_MODULE_6__pages_walkie_talkie_walkie_talkie__["a" /* WalkieTalkiePage */] },
            { title: 'StoryLibrary', component: __WEBPACK_IMPORTED_MODULE_7__pages_story_library_story_library__["a" /* StoryLibraryPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/northstarsystemsinc/Desktop/gitHub/bearApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/northstarsystemsinc/Desktop/gitHub/bearApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map