
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {Component} from "@angular/core";
import {Http} from "@angular/http";

/**
 * Generated class for the MeteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {
  meteo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeteoPage');
  }

  onGetMeteo(dataForm){
    let loading =this.loadingCtrl.create({
      content:"Chargement des données ...."
    });
    loading.present();
    this.http.get("http://api.openweathermap.org/data/2.5/forecast?q="
      +dataForm.ville+"&APPID=1cf3dfefb08bdf649ee7de0969509b08")
      .map(resp=>resp.json()).subscribe(data=>{
          this.meteo=data;
          loading.dismiss();
    },err=>{
      loading.dismiss();
      console.log(err);
    })
  }

}
