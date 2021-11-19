import { Component, OnInit } from '@angular/core';
import { DataCentreService } from 'src/app/services/data-centre.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {

  constructor(public stockdetails:DataCentreService) { }

  ngOnInit(): void {
  }

}
