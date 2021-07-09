import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  baseUrl:string="http://localhost:8080/api/v2/bills";
  constructor(private httpClient: HttpClient) {}

    
  

        insertProduct(bills:Object):Observable<Object>{
          return this.httpClient.post(`${this.baseUrl}`,bills);
        }

        getAllBills():Observable<any>{
          
          return this.httpClient.get(`${this.baseUrl}`);
        }


    

   
}
