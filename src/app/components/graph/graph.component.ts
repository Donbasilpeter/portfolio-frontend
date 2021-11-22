import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { DataCentreService } from 'src/app/services/data-centre.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  constructor(public plot:DataCentreService) { }

  ngOnInit(): void {
  }
  checkempty(){
    if(Object.keys(this.plot.portfoliostocks).length ===0 || Object.keys(this.plot.chartOption).length ===0){
      return true
    }
    else{
      return false
    }
   
  }



}
