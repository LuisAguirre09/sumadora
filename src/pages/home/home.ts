import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @Input() ngStyle: { [klass: string]: any; }

  accion: Object[];

  numeros = [
    [7,8,9],
    [4,5,6],
    [1,2,3],
    [0]
  ]

  cartas = [1,2,3];

  constructor(public navCtrl: NavController, navParams: NavParams) {
    
    this.accion = navParams.data;

  }

}
