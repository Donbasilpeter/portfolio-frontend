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



}
