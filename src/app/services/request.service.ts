import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  

  constructor(private http: HttpClient) { }

   getstocks(value:string){
    return this.http.post<any>('http://127.0.0.1:8001/getcode',{"name":value}).toPromise();

  }
  
}
