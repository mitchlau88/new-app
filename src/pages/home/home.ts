import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListPage} from '../list/list';
import {WalkieTalkiePage} from '../walkie-talkie/walkie-talkie';
import {StoryLibraryPage} from '../story-library/story-library';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  sequeToLinkPage(){
  	this.navCtrl.setRoot(ListPage);
  }

}
