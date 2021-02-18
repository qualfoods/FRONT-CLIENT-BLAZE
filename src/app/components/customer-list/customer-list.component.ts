import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerModel } from '../../model/customer.model';
import { CustomerService } from '../../services/customer/customer.service';
import {NgxPaginationModule } from 'ngx-pagination';
import { Observable } from "rxjs";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  
  customers : CustomerModel[];
  p = 1;
  psize = 3;
  totalRecords: number;

  constructor(private customerService: CustomerService, private router: Router) { 
    this.getPage(this.p);
  }

  getPage(page: number){
    this.loadData(page);
  }

  ngOnInit(): void {
  }

  loadData(page: number){
    const pageSize = this.psize;
    const pageNum = (page -1);
    return this.customerService.listCustomers(pageNum, pageSize, '').subscribe((rpt) => {
      this.customers = rpt.data;
      this.totalRecords = rpt.total;
    })
  }

  handlePageChange(event){
    this.p = event;
  }
}
