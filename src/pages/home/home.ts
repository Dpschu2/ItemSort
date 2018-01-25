import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdditemsPage } from '../additems/additems';
import { Events } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nextColor = '#345465';
  more = true;
  names = [];
  name = "";
  splash = true;
  tabBarElement: any;

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public events: Events, public splashScreen: SplashScreen) {
    this.events.subscribe('functionCall:tabSelected', eventData => { 
      this.reset();
    });
  }


  addName(){
    if(this.name.length != 0){
      this.names.push(this.name);
      this.name = "";
      if(this.names.length > 1){
        this.more = false;
      }
    }
  }
  reset(){
    this.names = [];
    this.name = "";
    this.more = true;
  }
  
  nextPage(){
    let data = {
      namesLength: this.names.length,
      names: this.names
    };
    this.navCtrl.push(AdditemsPage, data);
  }
}
