import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors'

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [32, 14, 16, 23, 38, 56], label: 'Sentiment Analysis' },
  { data: [14, 22, 53, 26, 53, 64], label: 'Image Recognition' },
  { data: [6, 35, 64, 27, 65, 24], label: 'Forecasting' },
]

const LINE_CHART_LABELS: string[] = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May'
]

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  }

  lineChartLegend = true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS

  ngOnInit(): void {
  }

}
