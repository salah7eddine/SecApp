import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
/**
 * Created by Admin on 30/12/2017.
 */

@Injectable()
export class GalleryServices{
  public host:string="https://pixabay.com/api/";
  constructor(private http:Http){
    }

    chercher(query:string,size:number,page:number){
      return this.http.get(this.host+"?key=6825048-b53e55ee93018fe0c6947593b&q="
        +query+"&per_page="+size+"&page="+page)
        .map(resp=>resp.json());
    }
}
