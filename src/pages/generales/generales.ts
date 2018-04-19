import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/user'

/**
 * Generated class for the GeneralesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-generales',
  templateUrl: 'generales.html',
})
export class GeneralesPage {

  public data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userSrv: UserService) {
      this.data = this.userSrv.data;
  }



}
