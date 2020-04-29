import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[] = [
  { data: [25, 65, 85, 45, 32, 16, 84], label: "Fall Sales" },
  { data: [54, 85, 86, 42, 15, 31, 54], label: "Fall Sales" }
]

const SAMPLE_BARCHART_LABELS: string[] = [
  'W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'
]

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  ngOnInit(): void {
  }

}
