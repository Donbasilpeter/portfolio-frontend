import { Component, OnInit } from '@angular/core';
import { DataCentreService } from 'src/app/services/data-centre.service';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-submit-bar',
  templateUrl: './submit-bar.component.html',
  styleUrls: ['./submit-bar.component.scss']
})
export class SubmitBarComponent implements OnInit {
  dailychange: any = []
  compare:boolean = false;

  constructor(private portfolio: DataCentreService) { }

  ngOnInit(): void {
  }

  createPortfolio() {
    let execute = true;
    this.portfolio.portfoliostocks.forEach((element: any) => {
      if (element.response == "FALSE") {
        execute = false;
      }
    });
    if (execute) {

      this.portfolio.quantity.forEach((element: any) => {
        if (element < 0) {
          execute = false;
        }
      });
      if (execute) {
        let arraysum: number = 0;
        for (let i = 0; i < this.portfolio.quantity.length; i++) {
          arraysum = Number(arraysum) + Number(this.portfolio.quantity[i]);

        }

        if (!(arraysum > 99.7 && arraysum < 100.3)) {
          alert("Sum of quantity of all stocks must be 100. You have a difference of " + (arraysum - 100) + "%");
        }
        else {
          this.portfolio.result = []
          let temp = 0
          for (let eachprice = 0; eachprice < this.portfolio.portfoliostocks[0].pricedata.length; eachprice++) {
            this.portfolio.portfoliostocks.forEach((element: any = 0, index: any = 0) => {
              temp = temp + element.pricedata[eachprice].price * this.portfolio.quantity[index] / 100;
            });
            this.portfolio.result.push({ date: this.portfolio.portfoliostocks[0].pricedata[eachprice].date, portfolio: temp })
            temp = 0;

          }
          this.portfolio.portfoliodetails.finalindex = this.portfolio.result[this.portfolio.result.length - 1].portfolio   //final index
          this.setdailychange()
          if (this.compare) {

            this.displayallstocks();
          }
        }
      }
      else {
        alert("no negative values");
      }
      console.log(this.portfolio.result)
    }
    else {
      alert("Data is not available for all stocks");


    }

    this.modifyChartoptions();
  }

  setdailychange() {
    this.dailychange = []
    for (let Index = 1; Index < this.portfolio.result.length; Index++) {
      this.dailychange.push((this.portfolio.result[Index].portfolio * 100 / this.portfolio.result[Index - 1].portfolio) - 100)
    }
    let sum = 0;
    for (let Index = 0; Index < this.dailychange.length; Index++) {
      sum = sum + this.dailychange[Index]
    }
    this.portfolio.portfoliodetails.mean = sum / this.dailychange.length; //mean
    sum = 0;
    for (let Index = 0; Index < this.dailychange.length; Index++) {
      sum = sum + Math.pow((this.dailychange[Index] - this.portfolio.portfoliodetails.mean), 2) 
    }
    sum = sum / this.dailychange.length;
    this.portfolio.portfoliodetails.deviation = Math.sqrt(sum); //deviation


    console.log()
    var date1 = new Date( this.portfolio.dateStart.substring(4, 6)+"/" +this.portfolio.dateStart.substring(6, 8) +"/"+this.portfolio.dateStart.substring(0, 4)); 
    var date2 = new Date( this.portfolio.dateEnd.substring(4, 6)+"/" +this.portfolio.dateEnd.substring(6, 8) +"/"+this.portfolio.dateEnd.substring(0, 4)); 
    
    console.log(date1,date2)
  
  
    var Time = date2.getTime() - date1.getTime(); 
    var days = Time / (1000 * 3600 * 24); 
    var months = days/30.41
    var years = days/365

    this.portfolio.portfoliodetails.daydifference = days //time difference in days
    this.portfolio.portfoliodetails.monthdifferene = months //time difference in months
    this.portfolio.portfoliodetails.yeardifference = years//time difference in years
    console.log(years)



    this.portfolio.portfoliodetails.cagr =   (Math.pow(this.portfolio.portfoliodetails.finalindex/100,(1/years)) -1)*100 //cagr


  }
  displayallstocks() {

    let eachdata: any;
    let copy: any[] = []

    for (let eachprice = 0; eachprice < this.portfolio.result.length; eachprice++) {
      eachdata = {}
      eachdata["date"] = this.portfolio.result[eachprice].date
      eachdata["portfolio"] = this.portfolio.result[eachprice].portfolio

      this.portfolio.portfoliostocks.forEach((stock: any) => {
        eachdata[stock.name] = stock.pricedata[eachprice].price
      });
      copy.push(eachdata)

    }
    this.portfolio.result = copy;

  }
  modifyChartoptions(){
    let tempLegend:any[] = []
    tempLegend =  Object.keys(this.portfolio.result[0])
    tempLegend.splice(0,1)
  
   
    let tempxAaxis:any = []
    this.portfolio.result.forEach((element:any) => {
      tempxAaxis.push(element.date)
    })
    let series:any[] =[];
    let seriesData:any[] = []
    tempLegend.forEach((element:any) => {
      this.portfolio.result.forEach((data:any) =>{
        seriesData.push(data[element])
      })
      series.push({  name: element,
      type: 'line',
      data: seriesData});
      seriesData = []

    });
    console.log(series)

    this.portfolio.chartOption = {
      title: {
        text: 'Portfolio Growth'
      },
      
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: tempLegend
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: tempxAaxis
      },
      yAxis: {
        type: 'value'
      },
      dataZoom: [
    
        {
            type: 'inside',
            xAxisIndex: 0,
            filterMode: 'filter'
        },
        {
            type: 'inside',
            yAxisIndex: 0,
            filterMode: 'empty'
        }
    ],
      series: series
    };
  }



}
