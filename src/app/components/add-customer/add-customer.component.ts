import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerModel } from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {


customerModel: CustomerModel = new CustomerModel();
submitted = false;

  constructor( private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    this.customerService
    .saveCustomer(this.customerModel).subscribe( data => {
      console.log(data);
    },
    error => console.log(error)); 
    
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  updateCustomer(id: string){
    
  }

}
