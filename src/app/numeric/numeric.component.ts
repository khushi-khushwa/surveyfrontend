import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { preview } from '../single-multiple/single-multiple.component';
@Component({
  selector: 'app-numeric',
  templateUrl: './numeric.component.html',
  styleUrl: './numeric.component.scss'
})
export class NumericComponent implements OnInit{
 @Input() type

 Extremely:any = 'Extremely Likely';
 Not:any = 'Not Likely';
  ques_id: any;

 constructor(private fb:FormBuilder, public dialog: MatDialog){

 }

 @Input() update
 @Input() form
@Output() submitquestion = new EventEmitter()
   @Output() tabSelected = new EventEmitter()

 items = Array(5).fill(1).map((fill, i) =>{
    return i+1
 })

  numericForm: FormGroup
 ngOnInit(): void {
  console.log(this.type)
    this.numericForm = this.createForm()

    if(this.update){
      this.numericForm.patchValue({
        question : this.form.question,
        SPSS: this.form.SPSS,
        extreme_like:this.form.extreme_like,
        like:this.form.like,
        questionType: this.form.questionType
      })
      
 this.ques_id = this.form.id;
    }
 }

  createForm():FormGroup{
   return this.fb.group({
      question:[''],
      SPSS: [''],
      questionType: ['numeric'],
      extreme_like : [''],
      like:['']
   })
  }
 warn(message: string) {
  alert(message); 
}
    
 createOption(){
   
 }

openpreview(){

       let data = {
        type:this.type
       }
       const dialoRef = this.dialog.open(preview, {
        width:'20rem',
        height:'20rem',
        data:data
       })

       dialoRef.afterClosed().subscribe(result =>{
        console.log('this dialog was closed')
       })
    }


    navigateto(){
      this.tabSelected.emit(0)
    }

itemse: any[] = [];

submit() {
  console.log(this.items.length);
  if(this.ques_id){

  
    this.itemse = []; 
    const formArray = this.fb.array([]);
  
    for (let i = 0; i < this.items.length; i++) {
      this.itemse.push(this.items[i]);
      formArray.push(this.fb.control(this.items[i]));
    }
  
    this.numericForm.setControl('item_length', formArray);
  
    console.log(this.itemse);
    console.log(this.numericForm.value);
    const data = {
      id : this.ques_id,
      ...this.numericForm.value
   }
    this.submitquestion.emit(data)
}else{
  this.itemse = []; 
  const formArray = this.fb.array([]);

  for (let i = 0; i < this.items.length; i++) {
    this.itemse.push(this.items[i]);
    formArray.push(this.fb.control(this.items[i]));
  }

  this.numericForm.setControl('item_length', formArray);

  console.log(this.itemse);
  console.log(this.numericForm.value);

  this.submitquestion.emit(this.numericForm.value);
}
  
}

}
