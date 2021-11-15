import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class DataCentreService {
  

  constructor(private request:RequestService) { }

   getstocks(value:string){
    return  this.request.getstocks(value);
   }

   getdata(code:number, todate:string, fromdate:string){
     
   }
}
