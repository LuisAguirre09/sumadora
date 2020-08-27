import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  accion: Object[];

  constructor(public navCtrl: NavController, navParams: NavParams) {
    
    this.accion = navParams.data;

  }

}
