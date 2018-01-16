import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhePage } from '../detalhe/detalhe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  items = [
	  {titulo:'Curso de Ionic2'},
	  {titulo:'Curso de laravel'},
	  {titulo:'Curso de Angular 2'}
  ];

  itemSelected(item){
  	//alert(item.titulo);
    this.navCtrl.push(DetalhePage,{item: item});
  }
}
