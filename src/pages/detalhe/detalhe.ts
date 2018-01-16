import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  public item:any = [];
  constructor(public navCtrl: NavController, params: NavParams) {
  	this.item = params.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
  }

}
