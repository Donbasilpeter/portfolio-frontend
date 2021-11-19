import { Injectable } from '@angular/core';
import { RequestService } from './request.service';

interface portfolioDetails {
  finalindex: number;
  mean:number;
  deviation:number;
  cagr:number
  yeardifference:number,
  monthdifferene:number,
  daydifference:number
}

@Injectable({
  providedIn: 'root'
})
export class DataCentreService {
  
  
  dateStart:string = "20200101";
  dateEnd :string = "20210101";
  portfoliostocks:any = [];
  quantity:number[] = [];
  result:any[] = [];
  portfoliodetails:portfolioDetails = {
    finalindex : 0,
    mean : 0,
    deviation : 0,
    cagr : 0,
    yeardifference:0,
    monthdifferene:0,
    daydifference:0
  }
 

  
  constructor(private request:RequestService) { 
   

  }


  

   getstocks(value:string){
    return  this.request.getstocks(value);
   }

   dateupdate(){
    if(this.dateStart != "" && this.dateEnd !=""){
      if(this.portfoliostocks && Number(this.dateStart) <Number(this.dateEnd)){
        let temp:any = []
        this.portfoliostocks.forEach((element:any) => {
          this.request.addstock({"script_code":element["script_code"],"from_date":this.dateStart,"to_date":this.dateEnd}).subscribe((data)=>{
            temp.push(data)
          })
        });
        this.portfoliostocks = temp
        console.log(this.portfoliostocks,this.quantity)

     
     }

    }
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
            if(this.quantity.length==0){
              this.quantity.push(100)
            }
            else{
            this.quantity.push(0)

            }

          


         
          })
         }
      }
      console.log(this.portfoliostocks,this.quantity)


     }
     
  


}
