import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
 baseUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient) { 

  }
 
//   assets='https://mocki.io/v1/492394f5-3a5b-417c-89c8-c2bed3f9667c'
//  platform ='https://mocki.io/v1/f0000606-ef37-46d6-b1c7-61081ac1ee09'
//   consfigure ='https://mocki.io/v1/d6955b35-cd22-4d6c-8818-4becf18769b2'
//   launch='https://mocki.io/v1/de0d2dc0-841f-4747-a46e-1fc080b52dd7'
// aquota ='https://mocki.io/v1/55ccf880-8ca6-4902-8c71-d0ebe4d42a9d'
//   url='https://mocki.io/v1/40f08b9c-cd25-4b90-b4f5-31eb170671e4'
    


//   assets='https://mocki.io/v1/8f2a7744-fa4d-4822-89a7-be561d28d6c9'
//  platform ='https://mocki.io/v1/b39bcbcb-dbe8-4dd0-8c5d-ee51a9eb722c'
//   consfigure ='https://mocki.io/v1/29cbf2d0-410b-4010-a905-970be13dde3c'
//   launch='https://mocki.io/v1/f4330d80-6952-4e4b-a08e-0dbff1f88a8a'
// aquota ='https://mocki.io/v1/d408a9c2-ddd2-4143-8bcc-dad3f5e17ad2'
//   url=' https://mocki.io/v1/b603fcd9-fdf8-4653-a3bf-dcfc66b6eaae'

render='http://localhost:3000/survey/creation/'

      assets='http://localhost:3000/survey/creation/assets'
 platform ='http://localhost:3000/survey/creation/preview'
  consfigure ='http://localhost:3000/survey/creation/configure'
  launch='http://localhost:3000/survey/creation/lunch'
aquota ='http://localhost:3000/survey/creation/quota'
  url=' http://localhost:3000/survey/creation/dashboard'
graph ='http://localhost:3000/survey/creation/graph'

  getdata(endpoint:string){
    return this.http.get(`${this.baseUrl}/${endpoint}`)
  }

  renderData(endpoint:string){
     return this.http.get(`${this.baseUrl}/${endpoint}`)
  }
  // quotaData(){
  //   return this.http.get(`${this.aquota}`)
  // }

  // lunchdata(){
  //   return this.http.get(`${this.launch}`)
  // }


  // configuredata(){
  //   return this.http.get(`${this.consfigure}`)
  // }
  // platformdata(){
  //   return this.http.get(`${this.platform}`)
  // }

  // assetsdata(){
  //   return this.http.get(`${this.assets}`)
  // }

 
}
