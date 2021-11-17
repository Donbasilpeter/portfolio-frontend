import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class DataCentreService {
  
  dateStart:any = "20200101"
  dateEnd :any = "20210101"
  portfoliostocks:any = []
  quantity:number[] = []
  constructor(private request:RequestService) { }


  

   getstocks(value:string){
    return  this.request.getstocks(value);
   }

   dateupdate(dateStart:any,dateEnd:any){

    this.dateStart = dateStart
    this.dateEnd = dateEnd
    if(dateStart != "" && dateEnd !=""){
      if(this.portfoliostocks && Number(dateStart) <Number(dateEnd)){
        let temp = this.portfoliostocks
        this.portfoliostocks = []
        for(let index =0 ; index < temp.length;index++ ){
          this.addstock(temp[index]["script_code"])
        }

     
     }

    }
    console.log(this.quantity)
    
  }

    addstock(code:string){
      let add = true;
      this.portfoliostocks.forEach((element:any) => {
        if(element["script_code"] == code){
          add = false;
        }
        
      });
      if(add){
        if(   Number(this.dateStart) <Number(this.dateEnd)){

          this.request.addstock({"script_code":code,"from_date":this.dateStart,"to_date":this.dateEnd}).subscribe((data)=>{
          
            this.portfoliostocks.push(data)
            console.log(data)
            console.log(this.quantity)


         
          })
         }
      }

     }
     
  


}
