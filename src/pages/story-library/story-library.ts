import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{StreamingMedia, StreamingVideoOptions, StreamingAudioOptions} from '@ionic-native/streaming-media';
/**
 * Generated class for the StoryLibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-story-library',
  templateUrl: 'story-library.html',
})
export class StoryLibraryPage {

  constructor(private streamingMedia: StreamingMedia) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoryLibraryPage');
  }
  
  
  jackAndTheBeanClick(){
    console.log("startVideo")
    let options: StreamingVideoOptions = {
        successCallback:() => {console.log()},
        errorCallback:() => {console.log()},
        orientation: 'portrait'
    }
    
    this.streamingMedia.playVideo('https://firebasestorage.googleapis.com/v0/b/bearpal-8eaa1.appspot.com/o/Jack_and_The_Beanstalk.mp4?alt=media&token=f05cceb3-eba2-4cdf-b994-2467f1e9dcde', options);
  }

  nightBeforeChristmasClick(){
    console.log("startVideo")
    let options: StreamingVideoOptions = {
        successCallback:() => {console.log()},
        errorCallback:() => {console.log()},
        orientation: 'portrait'
    }
    
    this.streamingMedia.playVideo('https://firebasestorage.googleapis.com/v0/b/bearpal-8eaa1.appspot.com/o/The_Night_Before_Christma.mp4?alt=media&token=de22579c-b3d3-4379-bf64-dd8f775cdda8', options);
  }

  nightNightCircusClick(){
    console.log("startVideo")
    let options: StreamingVideoOptions = {
        successCallback:() => {console.log()},
        errorCallback:() => {console.log()},
        orientation: 'portrait'
    }
    
    this.streamingMedia.playVideo('https://firebasestorage.googleapis.com/v0/b/bearpal-8eaa1.appspot.com/o/Nighty_Night_Circus.mp4?alt=media&token=38a1160d-b5ae-424e-ad88-789c52ffceb5', options);
  }

  theUglyDuckingClick(){
    console.log("startVideo")
    let options: StreamingVideoOptions = {
        successCallback:() => {console.log()},
        errorCallback:() => {console.log()},
        orientation: 'portrait'
    }
    
    this.streamingMedia.playVideo('https://firebasestorage.googleapis.com/v0/b/bearpal-8eaa1.appspot.com/o/The_Ugly_Duckling.mp4?alt=media&token=839be733-97d4-442d-bad0-84cbf7b40eb1', options);
  }

  threeLittlePigsClick(){
    console.log("startVideo")
    let options: StreamingVideoOptions = {
        successCallback:() => {console.log()},
        errorCallback:() => {console.log()},
        orientation: 'portrait'
    }
    
    this.streamingMedia.playVideo('https://firebasestorage.googleapis.com/v0/b/bearpal-8eaa1.appspot.com/o/Three_Little_Pigs.mp4?alt=media&token=54d2828e-158f-49d4-9c53-6c7c8ae3e4f7', options);
  }

}
