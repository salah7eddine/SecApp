import { IonicPageModule } from 'ionic-angular';
import { PlacesPage } from './places';
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    PlacesPage,
  ],
  imports: [
    IonicPageModule.forChild(PlacesPage),
  ],
})
export class PlacesPageModule {}
