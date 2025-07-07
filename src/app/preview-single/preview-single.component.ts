import { Component, Input, OnInit } from '@angular/core';
import { ComponentFixtureNoNgZone } from '@angular/core/testing';
import { FormservicesService } from '../serivce/formservices.service';
@Component({
  selector: 'app-preview-single',
  templateUrl: './preview-single.component.html',
  styleUrl: './preview-single.component.scss'
})
export class PreviewSingleComponent implements OnInit{
   
  @Input() previewQuestion;
  option: any;
@Input() header

 constructor(private deleteservice :FormservicesService){}

  ngOnInit(): void {
    console.log(this.previewQuestion,'i am in preview single');
    //  this.previewQuestion.map((item)=>{
    //  this.option= item.option
    //  })
    
  }


}
