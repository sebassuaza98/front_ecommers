import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reports: any = {
    topSellingProducts: [],
    topCustomers: [],
    activeProducts: []
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchReports();
  }

  fetchReports(): void {
    this.http.get('http://localhost:8080/orders/reports')
      .subscribe(
        (data: any) => this.reports = data,
        error => console.error('Error fetching reports:', error)
      );
  }
}
