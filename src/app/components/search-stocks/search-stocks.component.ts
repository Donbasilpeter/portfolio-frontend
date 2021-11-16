import { Component, OnInit } from '@angular/core';
import { DataCentreService } from 'src/app/services/data-centre.service';

@Component({
  selector: 'app-search-stocks',
  templateUrl: './search-stocks.component.html',
  styleUrls: ['./search-stocks.component.scss']
})
export class SearchStocksComponent implements OnInit {
  options: string[] =[]
  code: any = []
 
  constructor(private stockdata:DataCentreService) {
   }

  ngOnInit(): void {
  }


  async getstocks(value:string){
    if(value){
      let data1:any = "jhjh"
    const result = await this.stockdata.getstocks(value)
    this.options = []
    this.code = []
    for(let index = 0; index<result.data.length; index++){
      this.options.push(result.data[index]["name"])
      this.code.push(result.data[index])
    }
    }
    else{
      this.options = []
    }
    
  }
   
  getdata(Index:number){
    this.stockdata.addstock(this.code[Index]["code"])
  }


   
}
