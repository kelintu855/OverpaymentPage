import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Router } from '@angular/router';
import { ResponseContentType } from '@angular/http';

import { Observable, of } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor(
      private http: HttpClient,
      private router: Router,
      ) { }

 
  get(url: string, params: any): Observable<any> {
    return this.http.get(url, params)
  }


}
