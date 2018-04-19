import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GeneralesPage } from "../generales/generales";
import { Http } from "@angular/http";

import { UserService } from '../../services/user'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public email: string;

  constructor(public navCtrl: NavController, 
    public userSrv: UserService) {
      this.userSrv.getUser();
  }

  ingresar(){
    if(this.email == this.userSrv.data.email){
      this.navCtrl.push(GeneralesPage);
    }
  }

}
