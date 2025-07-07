import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormservicesService } from '../serivce/formservices.service';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent implements OnInit ,  OnChanges{
    loader:boolean=true;
  QuestionCategory = [
    {
      name:'single/Multiple',
      count:0,
      info:'Some Information regarding question type',
      selected:true,
      arrayName:'singleMultiple'
    },
    {
      name:'Likert Scale',
      count:0,
      info:'Some Information regarding question type',
      selected:true,
      arrayName:'singleMultiple'
    },
    {
      name:'FreeText',
      count:0,
      info:'Some Information regarding question type',
      selected:true,
      arrayName:'singleMultiple'
    },
    {
      name:'Grid/Matrix',
      count:0,
      info:'Some Information regarding question type',
      selected:true,
      arrayName:'singleMultiple'
    },
  ]
 defaultQuestion:any 
  constructor(private formservices:FormservicesService){

  }
   
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  selecttab=0;

  selectTab(e:any){
console.log(e)
this.selecttab= e
 }

 handleQuestion(event,type){
  console.log(event)
  this.formservices.postdata('survey',event).subscribe((res)=>{
    console.log(res)
    
  })
 }

 updatequestion(e, type){
   this.formservices.updataformdata('survey',e, e.id).subscribe((res)=>{
          console.log(res)
 })
}

 ngOnInit(): void {

  this.getData();
  this.formservices.delSub.subscribe(res => {
    console.log(res,"hello subject")
    this.getData();
  });

 }
 getData(){
  this.loader=true;
  this.formservices.getdata('survey').subscribe((res)=>{
    console.log(res)
    this.defaultQuestion= res
   })
   this.loader=false;
 }
}
