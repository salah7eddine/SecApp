import { IonicPageModule } from 'ionic-angular';
import { GalleryPage } from './gallery';
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    GalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(GalleryPage),
  ],
})
export class GalleryPageModule {}
