import { Component, ComponentFactory, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup , } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-single-multiple',
  templateUrl: './single-multiple.component.html',
  styleUrl: './single-multiple.component.scss'
})
export class SingleMultipleComponent implements OnInit {

  @Input() type
  // i:number=0
  @Output() tabSelected = new EventEmitter()
@Output() submitquestion = new EventEmitter()
  afds: any[]=[];
  ques_id: any;

 constructor(private fb:FormBuilder, public dialog: MatDialog){

 }

 @Input() update
@Input() form

  singleForm: FormGroup

   ngOnInit(): void {

  this.singleForm = this.createForm();
     

        if(this.update){
          this.singleForm.patchValue({
            question : this.form.question,
            SPSS: this.form.SPSS,
            option:this.form.option,
            questionType: this.form.questionType
          })
          
     this.ques_id = this.form.id;
        }
         
 
         
   }

  
   createForm(){
    return this.fb.group({
      // que_id:[i],
         question:[''],
         SPSS: [''],
         option : this.fb.array([
           this.createoption('normal'),
           this.createoption('normal'),
           this.createoption('normal'),
           this.createoption('normal')

         ]),
         questionType: new FormControl(this.type),
      
    })
   }
  
   createoption(type){

     console.log(type)
     return this.fb.group({
      opt_id:[''],
      option : new FormControl(
        {
        value:  
        type === 'none' 
        ? 'nothing'
         : type === 'other' 
         ? ' on any other' 
         : type === 'freetext' 
         ? 'write your views' 
         : "" ,
         disabled: false,
      }
    ),
    type: type,
       
    SPSS: [''],
     })
 
    }

    navigateto(){
      this.tabSelected.emit(0)
    }

    deletoption(i){
      const options = this.singleForm.get('option') as FormArray;;
   
     options.removeAt(i);
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

    submit(){
      console.log(this.singleForm.value)
   if(this.ques_id){

          const data = {
             id : this.ques_id,
             ...this.singleForm.value
          }
          this.submitquestion.emit(data)
   }else{

     const data  = (this.singleForm.get('option') as FormArray);
     console.log(data.length);
     if(data.length){
       for(let i=0;i<data.length;i++){
       
         (data.get(i.toString()).value['opt_id'] = (i+'qs'));
         
         console.log(this.singleForm.value);
       }
       this.submitquestion.emit(this.singleForm.value)
       this.singleForm = this.createForm();
     }
   }

      
    }
  
}




@Component({
  selector: 'app-preview.component',
  templateUrl: './preview.component.html',
  styleUrl: './single-multiple.component.scss'
})
export class preview implements OnInit {
    
    constructor(
      public dialogRef: MatDialogRef<preview>,
      @Inject(MAT_DIALOG_DATA) public data
    ){}

   ngOnInit(): void {
     
   }

   
}
