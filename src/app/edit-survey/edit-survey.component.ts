import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormservicesService } from '../serivce/formservices.service';
@Component({
  selector: 'app-edit-survey',
  templateUrl: './edit-survey.component.html',
  styleUrl: './edit-survey.component.scss'
})
export class EditSurveyComponent implements OnInit{
   @Output() editOutput = new EventEmitter()
  constructor(
    public dialogRef: MatDialogRef<EditSurveyComponent>,
     @Inject(MAT_DIALOG_DATA) public data,
     private formservices:FormservicesService
  ){
    
  }


  ngOnInit(): void {
    console.log(this.data)
  }

  dataEmmit(e){
    console.log(e)
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe(result =>{
  console.log(e.id)
      if(e.id === this.data.id){
        console.log(e.id)
        // this.editOutput.emit(e)
        this.formservices.updataformdata('survey',e, e.id).subscribe((res)=>{
          console.log(res)
          this.formservices.delSub.next(res);
          
        })
          
          // console.log('aredfhgjkl')
      }
    })
  }
  
}
