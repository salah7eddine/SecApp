
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {MeteoPage} from "../pages/meteo/meteo";
import {GalleryPage} from "../pages/gallery/gallery";
import {PlacesPage} from "../pages/places/places";
import {Component} from "@angular/core";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  menus:any=[
    {title:'My Gallery',component:GalleryPage},
    {title:'Meteo',component:MeteoPage},
    {title:'My Places',component:PlacesPage},
    {title:'Home',component:HomePage}
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    //noinspection TypeScriptUnresolvedFunction
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onPage(m){
    this.rootPage=m.component;
  }
}

