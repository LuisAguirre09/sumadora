import { Component, Input, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicTapInput } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @Input() ngStyle: { [klass: string]: any; }
  @ViewChild(IonicTapInput) input:IonicTapInput

  accion: Object[];
  entradas: Array<{entrada: Number, digito: String}>

  numeros = [
    [7,8,9],
    [4,5,6],
    [1,2,3],
    [0]
  ]

  inputFocus: number = null;


  constructor(public navCtrl: NavController, navParams: NavParams) {
    
    this.entradas = [
      {entrada: 1, digito: "0"},
      {entrada: 2, digito: "0"},
      {entrada: 3, digito: "0"},
    ]

    this.accion = navParams.data;

  }

  getFocus(e){
    this.inputFocus = e-1;
  }

  botonPresionado(n){
    if( this.inputFocus == null || this.inputFocus == 2 ){
      console.log("Selecciona primero una entrada válida");

    }else{
      if( this.entradas[this.inputFocus].digito == "0"){
        this.entradas[this.inputFocus].digito = n;

      }else if( n != 0 && this.entradas[this.inputFocus].digito != "0" ){
        this.entradas[this.inputFocus].digito += n.toString()

      }

    }
    
  }

}
