import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class Maincomponent {
  currentView: string = ''; 

  createProducts() {
    this.currentView = 'createProduct';
  }

  viewProducts() {
    this.currentView = 'viewProduct';
  }
  createOrders() {
    this.currentView = 'createOrder';
  }
  viewReports() {
    this.currentView = 'viewReport';
  }
  viewAudits() {
    this.currentView = 'viewAudit';
  }
  viewUsers() {
    this.currentView = 'viewUser';
  }
  
}
