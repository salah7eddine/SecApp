
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import "rxjs/add/operator/map"
import {GalleryServices} from "../../services/gallery.services";
import {Component} from "@angular/core";
import {DetailImagePage} from "../detail-image/detail-image";

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  motCle:string="";
  size:number=10;
  currentPage:number=1;
  totalPages:number;
  images:any={hits:[]};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private galleryServices:GalleryServices,private loadingCtrl:LoadingController){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  onSearch(){
    this.images.hits=[];
    this.doSearch();

  }
  doSearch(){

    let loading = this.loadingCtrl.create({
      content:'Chargement....'
    });
    loading.present();
    this.galleryServices.chercher(this.motCle,this.size,this.currentPage)
      .subscribe(data=>{
        //noinspection TypeScriptUnresolvedVariable
        this.totalPages=data.totalHits / this.size;
        if(this.totalPages % this.size !=0) ++this.totalPages;
        data.hits.forEach(h=>{
          this.images.hits.push(h);
        });
        loading.dismiss();
      },err=>{
        console.log(err);
      })
    /*this.http.get("https://pixabay.com/api/?key=6825048-b53e55ee93018fe0c6947593b&q="+this.motCle+"&per_page=10&page=1")
      .map(resp=>resp.json()).subscribe(data=>{
        this.images=data;
    },err=>{
      console.log(err);
    })*/
  }

  doInfinite(infinite){
    if(this.currentPage<this.totalPages){
      ++this.currentPage;
      console.log(this.currentPage +"/"+this.totalPages);
      this.doSearch();
      infinite.complete();
    }

  }

  onDetailImage(im){
    this.navCtrl.push(DetailImagePage,{myImage:im});
  }
}
