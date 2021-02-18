import { Injectable } from "@angular/core";

import {HttpClient , HttpParams } from '@angular/common/http';
import { CustomerModel } from "src/app/model/customer.model";

@Injectable({
    providedIn: 'root'
})
export class CustomerService{
    private baseUrl = 'http://localhost:8080/api/customer';

    constructor(private http: HttpClient){}


    listCustomers(page: number, psize: number, sortBy:string){
        return this.http.post<any>(`${this.baseUrl}/list?pageNum=${page}&pageSize=${psize}`, { });
    }

    saveCustomer(customer: CustomerModel){
        console.log("el customer es");
        console.log(customer.firstName);
        return this.http.post(`${this.baseUrl}/new`, customer);
    }

}