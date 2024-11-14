import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuditLog {
  id: number;
  action: string;
  entityName: string;
  entityId: string;
  user: string;
  timestamp: string;
}

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {
  auditLogs: AuditLog[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAuditLogs();
  }

  getAuditLogs(): void {
    this.http.get<AuditLog[]>('http://localhost:8080/audit-logs')
      .subscribe((data) => {
        this.auditLogs = data;
      });
  }
}
