import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  DUMMY_CUSTOMERS,
  DUMMY_ORDERS,
  DUMMY_PRODUCTS,
  INCOME_HISTORY,
} from '../../../../dto/DummyData';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexStroke,
  ApexFill,
  ApexTooltip,
  ApexGrid,
  ApexMarkers,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend, ChartComponent,
} from 'ng-apexcharts';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-statistics',
  imports: [MatIcon, CurrencyPipe, ChartComponent],
  templateUrl: './statistics.html',
  styleUrl: './statistics.scss',
})
export class Statistics implements OnInit {
  totalIncome = 0;
  totalOrders = DUMMY_ORDERS.length;
  totalCustomers = DUMMY_CUSTOMERS.length;
  totalProducts = DUMMY_PRODUCTS.length;

  /* ─── Area (Income History) ─── */
  chartSeries: ApexAxisChartSeries = [];

  chartOptions: {
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    stroke: ApexStroke;
    fill: ApexFill;
    tooltip: ApexTooltip;
    grid: ApexGrid;
    markers: ApexMarkers;
    dataLabels: ApexDataLabels;
    colors: string[];
  } = {
      chart: {
        type: 'area',
        height: 280,
        toolbar: { show: false },
        fontFamily: 'inherit',
      },
      xaxis: {
        categories: INCOME_HISTORY.map((d) => d.month),
        labels: { style: { colors: '#b4b4b4', fontSize: '12px' } },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        labels: {
          style: { colors: '#b4b4b4', fontSize: '12px' },
          formatter: (val: number) => '$' + (val / 1000).toFixed(0) + 'k',
        },
      },
      stroke: { curve: 'smooth', width: 3 },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.45,
          opacityTo: 0.02,
          stops: [0, 100],
        },
      },
      tooltip: {
        y: { formatter: (val: number) => '$' + val.toLocaleString() },
      },
      grid: {
        borderColor: '#f0f2f5',
        strokeDashArray: 4,
        xaxis: { lines: { show: false } },
      },
      markers: { size: 4, strokeWidth: 2, hover: { size: 7 } },
      dataLabels: { enabled: false },
      colors: ['#16a085'],
    };

  /* ─── Bar (Orders per Month) ─── */
  barSeries: ApexAxisChartSeries = [];

  barChartOptions: {
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    plotOptions: ApexPlotOptions;
    tooltip: ApexTooltip;
    grid: ApexGrid;
    dataLabels: ApexDataLabels;
    colors: string[];
  } = {
      chart: {
        type: 'bar',
        height: 250,
        toolbar: { show: false },
        fontFamily: 'inherit',
      },
      xaxis: {
        categories: INCOME_HISTORY.map((d) => d.month),
        labels: { style: { colors: '#b4b4b4', fontSize: '12px' } },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        labels: { style: { colors: '#b4b4b4', fontSize: '12px' } },
      },
      plotOptions: {
        bar: {
          borderRadius: 6,
          columnWidth: '55%',
          distributed: false,
        },
      },
      tooltip: { y: { formatter: (val: number) => val + ' orders' } },
      grid: {
        borderColor: '#f0f2f5',
        strokeDashArray: 4,
        xaxis: { lines: { show: false } },
      },
      dataLabels: { enabled: false },
      colors: ['#2980b9'],
    };

  /* ─── Donut (Income by Quarter) ─── */
  donutSeries: number[] = [];

  donutChartOptions: {
    chart: ApexChart;
    labels: string[];
    legend: ApexLegend;
    tooltip: ApexTooltip;
    plotOptions: ApexPlotOptions;
    colors: string[];
    dataLabels: ApexDataLabels;
  } = {
      chart: {
        type: 'donut',
        height: 250,
        fontFamily: 'inherit',
      },
      labels: ['Q1 (Jan–Mar)', 'Q2 (Apr–Jun)', 'Q3 (Jul–Sep)', 'Q4 (Oct–Dec)'],
      legend: {
        position: 'bottom',
        labels: { colors: '#4a4a4a' },
        fontSize: '12px',
      },
      tooltip: { y: { formatter: (val: number) => '$' + val.toLocaleString() } },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            labels: {
              show: true,
              total: {
                show: true,
                label: 'Total',
                formatter: () => '$' + (this.totalIncome / 1000).toFixed(0) + 'k',
                color: '#2c3e50',
                fontSize: '14px',
                fontWeight: '700',
              },
            },
          },
        },
      },
      colors: ['#16a085', '#2980b9', '#2c3e50', '#e67e22'],
      dataLabels: { enabled: false },
    };

  ngOnInit(): void {
    this.totalIncome = INCOME_HISTORY.reduce((s, d) => s + d.income, 0);

    // Area chart data
    this.chartSeries = [
      {
        name: 'Income',
        data: INCOME_HISTORY.map((d) => d.income),
      },
    ];

    // Bar chart: simulate random orders per month
    const ordersPerMonth = [3, 5, 4, 7, 6, 9, 8, 11, 10, 12, 11, 14];
    this.barSeries = [{ name: 'Orders', data: ordersPerMonth }];

    // Donut: income by quarter
    const months = INCOME_HISTORY.map((d) => d.income);
    this.donutSeries = [
      months.slice(0, 3).reduce((a, b) => a + b, 0),
      months.slice(3, 6).reduce((a, b) => a + b, 0),
      months.slice(6, 9).reduce((a, b) => a + b, 0),
      months.slice(9, 12).reduce((a, b) => a + b, 0),
    ];
  }
}

