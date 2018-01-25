import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdditemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-additems',
  templateUrl: 'additems.html',
})
export class AdditemsPage {
  nextColor = '#345465';
  more = true;
  more2 = false;
  more3 = false;
  items = [];
  item = "";
  itemCount = this.navParams.get('namesLength');
  namesLength = this.navParams.get('namesLength');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  addItem(){
    if(this.item.length != 0){
      this.items.push(this.item);
      this.item = "";
      if(this.items.length == this.namesLength){
        this.more = false;
        this.more2 = true;
        this.more3 = true;
      }
      this.itemCount--;
    }
  }
  newItems(){
    this.more = true;
    this.more2 = false;
    this.more3 = false;
    this.items = [];
    this.itemCount = this.navParams.get('namesLength');
  }
  nextPage(){
    let data = {
      names: this.navParams.get('names'),
      items: this.items
    };
    this.navCtrl.push('SortedPage', data);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditemsPage');
  }

}
