import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { preview } from '../single-multiple/single-multiple.component';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements OnInit{
  @Input() type
  selectradio:boolean=true
   @Output() tabSelected = new EventEmitter()
   @Input() update
   @Input() form
   optionshow:boolean=false;
   valueshow:boolean=false;
  ques_id: any;
 constructor(private fb:FormBuilder,  private dialog: MatDialog  ){}
 @Output() submitquestion = new EventEmitter()
    gridOption = [{name:'Default Grid', checked:true}, {name:'Grid Multiple', checked:false}, {name:'Grid Freetext', checked:false}]
  gridForm  :FormGroup

  ngOnInit(): void {

      this.gridForm = this.createForm()


      if(this.update){
        this.gridForm.patchValue({
          question : this.form.question,
          SPSS: this.form.SPSS,
          option:this.form.option,
          values:this.form.values,
          questionType: this.form.questionType
        })
        
   this.ques_id = this.form.id;
      }
 
  }

  createForm(): FormGroup{
    return this.fb.group({
      question : [''],
      option:this.fb.array([
        this.createOption(),
        this.createOption()
      ]),
      SPSS: [''],
      values:this.fb.array([
        this.createValues(),
        this.createValues()
      ]),
       questionType: ['grid']

})
  }

  createOption(): FormGroup{
       return this.fb.group({
        opt_id:[''],
        option: new FormControl(''),
        type: new FormControl('normal'),
        SPSS: [''],

       })

  }

  optionAdd(){
    const option = this.gridForm.get('option') as FormArray
    option.push(this.createOption())
    if(option.length >= 2){
      this.optionshow=true
    }
    else{
      this.optionshow=false
    }
  }

  createValues():FormGroup{
    return this.fb.group({
      gr_id:[''],
      option: new FormControl(''),
      type: new FormControl('normal'),
      SPSS: [''],

     })
  }

  valuesAdd(){
    const values = this.gridForm.get('values') as FormArray
    values.push(this.createValues())
    if(values.length >= 2){
      this.valueshow=true
    }
    else{
      this.valueshow=false
    }
  }


  radiochange(i, checked, name){

  }

  deleteOption(i, type){
      if(type === 'values'){
        const values = this.gridForm.get('values') as FormArray
        values.removeAt(i)
        if(values.length >= 2){
          this.valueshow=false
        }
        else{
          this.valueshow=true
        }
        
      }
      else if(type === 'option'){
        const option = this.gridForm.get('option') as FormArray
        option.removeAt(i)

        if(option.length >= 2){
          this.optionshow=false
        }
        else{
          this.optionshow=true
        }
      }
  }


  navigateto(){
    this.tabSelected.emit(0)
  }


  submit(){
    if(this.ques_id){
      // const data =   (this.gridForm.get('option') as FormArray);
      // const values =   (this.gridForm.get('values') as FormArray);
      // if(data.length){
      //  for(let i=0; i<data.length; i++){
      //     console.log(i);
      //     console.log(data[i]);
      //     (data.get(i.toString()).value['opt_id'] = (i+'qs'));
        
      //  }
      // }
 
      // if(values.length){
      //  for(let i=0; i<values.length; i++){
      //     console.log(i);
      //     console.log(values[i]);
      //     (values.get(i.toString()).value['gr_id'] = (i+'qsval'));
        
      //  }
      // }

      let griddata= {
             id: this.ques_id,
             ...this.gridForm.value
      }
 
      this.submitquestion.emit(griddata)
    }
    console.log(this.gridForm.value)
     const data =   (this.gridForm.get('option') as FormArray);
     const values =   (this.gridForm.get('values') as FormArray);
     if(data.length){
      for(let i=0; i<data.length; i++){
         console.log(i);
         console.log(data[i]);
         (data.get(i.toString()).value['opt_id'] = (i+'qs'));
       
      }
     }

     if(values.length){
      for(let i=0; i<values.length; i++){
         console.log(i);
         console.log(values[i]);
         (values.get(i.toString()).value['gr_id'] = (i+'qsval'));
       
      }
     }

     this.submitquestion.emit(this.gridForm.value)
     console.log(this.gridForm.value)
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
