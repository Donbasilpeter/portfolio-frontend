import { Component, OnInit } from '@angular/core';
import { DataCentreService } from 'src/app/services/data-centre.service';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-search-stocks',
  templateUrl: './search-stocks.component.html',
  styleUrls: ['./search-stocks.component.scss']
})
export class SearchStocksComponent implements OnInit {
  options: string[] =[]
  code: any = []
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(private datacentre:DataCentreService) {
   }

  ngOnInit(): void {
    this.getstocks("")
  }


  async getstocks(value:string){
    let data1:any = "jhjh"
    const result = await this.datacentre.getstocks(value)
    this.options = []
    this.code = []
    for(let index = 0; index<result.data.length; index++){
      this.options.push(result.data[index]["name"])
      this.code.push(result.data[index])
    }
  }

 // getdata(Index:number){
   //this.datacentre.getdata( this.code[Index]["code"],todate,fromdate)
   //console.log(this.code[Index])
  //}
  
   
}
