import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';

/**
 * Generated class for the SortedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sorted',
  templateUrl: 'sorted.html',
})
export class SortedPage {
  nextColor = '#345465';
  names = this.navParams.get('names');
  items = this.navParams.get('items');

  constructor(public navCtrl: NavController, public events: Events, public navParams: NavParams) {
    
    this.items = this.shuffle(this.items);

  }
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  startOver(){
    this.tabSelected();
    this.navCtrl.popToRoot()
  }
  tabSelected() {
    this.events.publish('functionCall:tabSelected');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SortedPage');
  }

}
