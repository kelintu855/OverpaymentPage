import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import {OverpaymentDetail} from './models/OverpaymentDetail'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverpaymentService {
  URL:string = 'http://overpaymentapi.local/api/overpayment/search';
  constructor(private http: HttpClient) {
    
   }

  getOverpaymentDetail(id:number):Observable<OverpaymentDetail[]>
  {
    return this.http.get<OverpaymentDetail[]>(`${this.URL}?id=${id}`);

  }
}
