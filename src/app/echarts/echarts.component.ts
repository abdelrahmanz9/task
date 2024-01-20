import { Component ,OnInit ,ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexYAxis,

  
  
 

} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  yaxis:ApexYAxis,
};

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss']
})
export class EchartsComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor(){
    this.chartOptions = {
      
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100,150,30,40,80,150],
          color: '#8A74F9',
          
        }
       
      ],
      
      chart: {
        height: 200,
        type: "area",
       
        toolbar: {
          show: false // Set to false to hide the toolbar
        },
      

      },
    
      stroke: {
        curve: "smooth"
      },
      xaxis: {
       
        type: "category",
        categories: [
          "ديسمبر",
          "نوفمبر",
          "اكتوبر",
          "سبتمبر",
          "اغسطس",
          "يوليو",
          "يونيو",
          "مايو",
          "أبريل",
          "مارس",
          "فبراير",
          "يناير",
          
        ],
        axisTicks:{
          show:false
        },
        labels: {
          style: {
            colors: "#9291A5", // Set colors for each category
          },
        },
      },
      
      yaxis: {
        show:false,
      
      },
     



    

   
    };

      
    
      
    };
  }

