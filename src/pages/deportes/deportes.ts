import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from "../../services/user";

/**
 * Generated class for the DeportesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-deportes',
  templateUrl: 'deportes.html',
})
export class DeportesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userSrv: UserService) {
      
  }



}
