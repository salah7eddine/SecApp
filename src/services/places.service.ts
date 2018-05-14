import {Injectable} from "@angular/core";
import {Place} from "../model/place.model";
import {Storage} from "@ionic/storage";
/**
 * Created by Admin on 31/12/2017.
 */

@Injectable()
export class PlacesService{

  constructor(public storage:Storage){

  }
  //noinspection TypeScriptValidateTypes
  private places:Array<Place>=[
    {title:"A"},{title:"B"},{title:"C"}
  ];

  addPlace(place:Place){
    this.places.push(place);
    this.storage.set('places',this.places);

  }

  getAllPlaces(){
    //noinspection TypeScriptUnresolvedFunction
    return this.storage.get('places').then(data=>{
      this.places=data!=null?data:[];
      return this.places;
    })
  }
}
