import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly apiUrl:string='http://localhost:53379/api/customer';


  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<any>{
    return this.httpClient.get(this.apiUrl+'/SelectCustomer');
  }

  getCustomerById(): Observable<any>{
    const httpParams=new HttpParams().set('id','1');
    const options ={params:httpParams}
    return this.httpClient.get(this.apiUrl+'/GetCustomerById',options);
  }

  postCustomer(formObject:any):Observable<any>{
    const bodyObj=formObject;
    const httpHeaders=new HttpHeaders().set('Content-Type','application/json');
    const options ={headers:httpHeaders};
    return this.httpClient.post(this.apiUrl+ '/InsertCustomer',bodyObj,options);
  }

  deleteCustomer(customerId:any):Observable<any>{
    const httpParams=new HttpParams().set('customerId',customerId)
    const options ={params:httpParams};
    return this.httpClient.delete(this.apiUrl+ '/DeleteCustomer',options);
  }
  
  putCustomer(formObject):Observable<any>{
    const bodyObj=formObject;
    const httpHeaders=new HttpHeaders().set('Content-Type','application/json');
    const options ={headers:httpHeaders};
    return this.httpClient.put(this.apiUrl+ '/UpdateCustomer',bodyObj,options);
  }

  putCust(formObject,customerId):Observable<any>{
    const bodyObj=formObject;
    const httpHeaders=new HttpHeaders().set('Content-Type','application/json');
    const httpParams=new HttpParams().set('customerId',customerId)
    const options ={headers:httpHeaders,params:httpParams};
    return this.httpClient.put(this.apiUrl+ '/UpdateCustomer',bodyObj,options);
  }






}
