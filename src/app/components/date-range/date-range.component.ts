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

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });


  constructor(private dateupdate:DataCentreService,private datepipe:DatePipe) { }

  ngOnInit(): void {
    this.onChanges();
  }

  onChanges(): void {
    this.range.valueChanges.subscribe(val => {
    let start =this.datepipe.transform(val['start'], "yyyyMMdd") || ''
    let end =this.datepipe.transform(val['end'], "yyyyMMdd") || ''
    this.dateupdate.dateupdate(start,end)
    });
  }


  
}
