import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { preview } from '../single-multiple/single-multiple.component';
@Component({
  selector: 'app-freetext',
  templateUrl: './freetext.component.html',
  styleUrl: './freetext.component.scss'
})
export class FreetextComponent implements OnInit{
  @Input() type
  @Input() update
  @Input() form
  optionForm: FormGroup
  @Output() submitquestion = new EventEmitter()
     @Output() tabSelected = new EventEmitter()
  ques_id: any;
  constructor(private fb:FormBuilder, private dialog: MatDialog ){}
  selectradio=false
   text=[{name:'Default freetext', checked:true}, {name:'Multiple freetext', checked:false}]
  
      radioname:string = ''
    
   radiochange(i, checked, name){
    console.log(i)
     this.radioname = name
    if(i == 1){
      this.selectradio=true
      checked=true;
    }
   }

   ngOnInit(): void {
     this.optionForm= this.createForm()
     if(this.update){
      this.optionForm.patchValue({
        question : this.form.question,
        SPSS: this.form.SPSS,
        option:this.form.option,
        
        questionType: this.form.questionType
      })
      
 this.ques_id = this.form.id;
    }
   }

   createForm():FormGroup{
   return  this.fb.group({
      question:[''],
      SPSS:[''],
      questionType: ['freetext'],
       option: this.fb.array([
        this.createOption()
      ])
     })
   }

   createOption() {
    return this.fb.group({
      opt_id:[''],
      option:['']
     })
  }
    addOption(){
      const options = this.optionForm.get('option') as FormArray;
      options.push(this.createOption());
    }

    deleteOption(i){
      const options = this.optionForm.get('option') as FormArray;
      options.removeAt(i)
    }
      
    navigateto(){
      this.tabSelected.emit(0)
    }
    
    submit(){

      if(this.ques_id){
           let data = {
            id:this.ques_id,
            ...this.optionForm.value
           }
           console.log(this.optionForm.value)
           this.submitquestion.emit(data)
      }
      console.log(this.optionForm.value)
         const data= this.optionForm.get('option') as FormArray
         console.log(data.length)
          if(data.length){
            for(let i =0; i<data.length; i++){
          
            const optionGroup = data.at(i) as FormGroup;
            const optIdControl = optionGroup.get('opt_id') as FormControl;
            optIdControl.setValue(i+'qs');  
          
            }
            console.log(this.optionForm.value)
            this.submitquestion.emit(this.optionForm.value)
          }

       
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
    
    
      
    
  }



