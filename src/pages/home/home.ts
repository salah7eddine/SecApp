
import { NavController } from 'ionic-angular';
import {Component} from "@angular/core";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contact={
    name:'me',
    email:'me@gmail.com',
    photo:'assets/imgs/logo.png'
  }
  constructor(public navCtrl: NavController) {

  }

}
