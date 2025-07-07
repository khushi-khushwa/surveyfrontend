import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from 'stream';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FormservicesService {

  constructor(private http:HttpClient) { }
 baseUrl = environment.apiBaseUrl;

      

  postdata(endpoint:string, data: any) {
    return this.http.post(`${this.baseUrl}/${endpoint}`,+data);
  }
 getdata(endpoint: string) {
  console.log(`${this.baseUrl}/${endpoint}`)
    return this.http.get(`${this.baseUrl}/${endpoint}`);
  }


  updataformdata(endpoint: string, data: any, id: any) {
    console.log(data, id);
    return this.http.put(`${this.baseUrl}/${endpoint}/${id}`, data);
  }


  deletedata(endpoint: string, id: any) {
    console.log(id);
    return this.http.delete(`${this.baseUrl}/${endpoint}/${id}`);
  }
  delSub = new Subject();
}
