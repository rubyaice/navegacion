import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre:string = "";
  edad:number = 0;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {

    this.nombre = navParams.get( "nombre" );
    this.edad = navParams.get( "edad" );

    console.log( this.nombre, this.edad );

  }

  cerrar_con_parametros(){

    let data = {

      nombre: "Juan Carlos",
      edad: 80,
      coord:{
        lat: 10,
        lng: -10
      }

    };

    this.viewCtrl.dismiss( data );
  }

  cerrar_sin_parametros(){

    this.viewCtrl.dismiss();

  }
}
