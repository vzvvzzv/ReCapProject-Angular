import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetailDtoResponseModel } from '../models/customer-detail-dtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailDtoService {

  apiUrl = 'https://localhost:44314/api/customers/getcustomerdetails';

  constructor(private httpClient:HttpClient) { }

  getCustomerDetailDtos():Observable<CustomerDetailDtoResponseModel> {
    return this.httpClient.get<CustomerDetailDtoResponseModel>(this.apiUrl)

  }

}

