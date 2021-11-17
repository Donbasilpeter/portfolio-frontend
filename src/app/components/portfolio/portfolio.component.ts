import { Component, OnInit } from '@angular/core';
import { DataCentreService } from 'src/app/services/data-centre.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private stockdata:DataCentreService) { }

  stk:any
  quantityArray:number[] = []
  ngOnInit(): void {
    this.stk = this.stockdata.portfoliostocks
    this.quantityArray = this.stockdata.quantity

  }
  quantityUpdate(Index:any,quantity:string){
    this.quantityArray[Index] =Number(quantity)
    this.stockdata.quantity[Index] =Number(quantity)    
  }

}
