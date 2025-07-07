import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
@Component({
  selector: 'app-quota',
  templateUrl: './quota.component.html',
  styleUrl: './quota.component.scss'
})
export class QuotaComponent implements OnInit{
  quotadata: any;

  constructor(private quotaapi:ServicesService){

  }

  qoutaType:any = {
    1: 'Default',
    5: 'Survey Question',
    6: 'Emotion'
  };

  ngOnInit(): void {
    this.quotaapi.renderData('quota').subscribe((res)=>{
       console.log(res)
       this.quotadata = res
    })
  }
  createQuota(){

  }

  editQuota(q,f){

  }

  deleteQuota(q, i){

  }
  
}
