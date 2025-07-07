import { Component, Input, OnInit } from '@angular/core';
import { json } from 'stream/consumers';
import { FormservicesService } from '../serivce/formservices.service';

@Component({
  selector: 'app-survey-preview',
  templateUrl: './survey-preview.component.html',
  styleUrl: './survey-preview.component.scss'
})
export class SurveyPreviewComponent implements OnInit{
  @Input() outputQuestion

  pre: any;
  constructor( private deleteservice:FormservicesService){}
   
  ngOnInit(): void {
    console.log(this.outputQuestion)

  }
  deletequestion(e, type){
console.log(e)
  }

  }
  


