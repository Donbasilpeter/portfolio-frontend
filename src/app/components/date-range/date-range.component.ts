import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { DataCentreService } from 'src/app/services/data-centre.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss']
})
export class DateRangeComponent implements OnInit {

  

  constructor(private dateupdate:DataCentreService,private datepipe:DatePipe) { }

  ngOnInit(): void {
    // this.onChanges();
  }

  // onChanges(): void {
  //   this.range.valueChanges.subscribe(val => {
  //   let start =this.datepipe.transform(val['start'], "yyyyMMdd") || ''
  //   let end =this.datepipe.transform(val['end'], "yyyyMMdd") || ''
  //   this.dateupdate.dateupdate(start,end)
  //   });
  // }

  fromChanges(val:any){
    let start =this.datepipe.transform(val, "yyyyMMdd") || ''
    this.dateupdate.dateStart = start
    this.dateupdate.dateupdate();
    

  }
  toChanges(from:any,to:any){
    let start =this.datepipe.transform(from, "yyyyMMdd") || ''
    this.dateupdate.dateStart = start
    let end =this.datepipe.transform(to, "yyyyMMdd") || ''
    this.dateupdate.dateEnd= end
    this.dateupdate.dateupdate();
    

  }

  
}
