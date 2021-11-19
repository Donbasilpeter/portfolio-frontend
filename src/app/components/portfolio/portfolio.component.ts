import { Component, OnInit } from '@angular/core';
import { DataCentreService } from 'src/app/services/data-centre.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(public stockdata:DataCentreService) { }

  ngOnInit(): void {


  }
  quantityUpdate(Index:any,quantity:string){
    this.stockdata.quantity[Index] =Number(quantity)
    this.onchange(Index)
  }


onchange(Index:number){
  let sum = 0
  for(let start=0;start <=Index; start++ ){
    sum = sum + this.stockdata.quantity[start]
  }
  for(let start = Index+1;start<this.stockdata.quantity.length;start++){
    this.stockdata.quantity[start] = (100 -sum)/(this.stockdata.quantity.length -Index-1); 
  }
  console.log(this.stockdata.portfoliostocks,this.stockdata.quantity)

}

remove(i:number){
  let val = this.stockdata.quantity[i];
  for(let itrate = 0; itrate<this.stockdata.quantity.length;itrate++){
    this.stockdata.quantity[itrate] = this.stockdata.quantity[itrate] + val/(this.stockdata.quantity.length - 1) 
  
  }
  this.stockdata.portfoliostocks.splice(i, 1);
  this.stockdata.quantity.splice(i, 1);
  console.log(this.stockdata.portfoliostocks,this.stockdata.quantity)
  
}


}

