import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mask = {
    mask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/]
  };

  constructor(public navCtrl: NavController) {

  }


}
