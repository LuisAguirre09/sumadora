import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @Input() ngStyle: { [klass: string]: any; }

  accion: Object[];//objeto que recibirá la info del navParams
  entradas: Array<{entrada: Number, digito: string}> //diccionario de los inputs

  numeros = [ //arreglo bi de los botones de la sumadora
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

  botonPresionado(valor){
    if( this.inputFocus == null || this.inputFocus == 2 ){
      console.log("Selecciona primero una entrada válida");

    }else{
      if( this.entradas[this.inputFocus].digito == "0"){
        this.entradas[this.inputFocus].digito = valor;

      }else if( valor == 0 && this.entradas[this.inputFocus].digito == "0" ){
        this.entradas[this.inputFocus].digito = valor;

      }else{
        this.entradas[this.inputFocus].digito += valor.toString()
      }

    }
  }

  evaluar(){ //evalua una cadena de string y realiza la operacion aritmetica
    this.entradas[2].digito = eval( this.entradas[0].digito + this.accion['valor'] + this.entradas[1].digito );
  }


}
