import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditSurveyComponent } from '../edit-survey/edit-survey.component';
import { FormservicesService } from '../serivce/formservices.service';
@Component({
  selector: 'app-question-heading',
  templateUrl: './question-heading.component.html',
  styleUrl: './question-heading.component.scss'
})
export class QuestionHeadingComponent implements OnInit {

  @Input() question: any
  locked = [];
  deleteservice: any;
  ngOnInit(): void {
    console.log(this.question)
  }
  
  constructor(private dialog:MatDialog, private formservice:FormservicesService){}
 emitFlags = {
   hideImage : false,
   terminations : false,
    anchor: false,
    child: false,
    deleteoption: false,
    numeric_image_option: false
 }

  actions=[
    {
      name:'Add Image',
      icon:'visibility',
      flag:false,
      visible:false,
      context:this,
      value:'showImage',
      locked: this.locked.includes('showImage'),
      perform(e){
       this.flag = !this.flag;
        this.context = this.emitFlags.hideImage=this.flag
            this.name = this.flag ? "remove image" :  "Add image"
            this.context.flags.emit(this.context.emitFlags);
      }
    },
    {
      name:'Show Termination',
      icon:'cancel_schedule_send',
      flag:false,
      visible:false,
      value:'termination',
      disabled_icon: "visibility_off",
      locked: this.locked.includes('termination'),
      perform(e){
       this.flag = !this.flag;
       this.context = this.emitFlags.hideImage=this.flag
        this.name = this.flag ? "remove image" :  "Add image"
        this.context.flags.emit(this.context.emitFlags);
      }
    },
    {
      name: "Duplicate",
      icon: "file_copy",
      flag:false,
      visible:false,
      context:this,
      value:'duplicate',
      disabled_icon: "visibility_off",
      locked: this.locked.includes('duplicate'),
      perform(e){
        console.log(e)
         this.context.duplicate(e)
      }
    },
    {
      name:'Update Sequence', 
      icon:'swap_vert',
      flag:false,
      visible:false,
      value:'swap',
      context:this,
      locked: this.locked.includes('swap'),
      perform(e){
       this.flag = !this.flag;
       this.context = this.emitFlags.hideImage=this.flag
         this.name = this.flag ? "remove image" :  "Add image"
         this.context.updateFlag(e);

      }
    },   {
      name:'Edit',
      icon:'edit',
      flag:false,
      visible:false,
      value:'edit',
      context:this,
      locked: this.locked.includes('edit'),
      disabled_icon: 'visibilithy_off',
      perform(e){
        console.log(e)
        this.context.editQuestion(e, "edit");

        
      }
    },
    {
      name:'Show Option Delete',
      icon:'cancel',
      flag:false,
      visible:false,
      contect:this,
      value:'optionDelete',
      locked: this.locked.includes('optionDelete'),
      disabled_icon: 'visibilithy_off',
      perform(e){
       this.flag = !this.flag;
       this.context = this.emitFlags.hideImage=this.flag
       this.context.flags.emit(this.context.emitFlags);
          
      }
    },
    {
      name: "Delete",
      icon: "delete",
      action: "delete_question",
      flag: false,
      value: "delete",
      context: this,
      locked: this.locked.includes("delete"),
      hideOnReview: true,
      enable: true,
      disabled_icon: "visibility_off",
      perform(e) {
        this.context.deleteq(e);
      },
    },
  ]

  editQuestion(e, edit){

   let dialogRef = this.dialog.open(EditSurveyComponent, {
    height: '400px',
    width: '600px',
    data:e


  });
  }

  deleteq(e){
    let dialogRef = this.dialog.open(deletedialogueComponent, {
      height: '200px',
      width: '300px',
      data:e
   
    });
  //   dialogRef.close();
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result)
  //   // this.questiondata.emit(e)
    
  // this.deleteservice.deletedata(this.data, this.data.id).subscribe((res)=>{
  //   console.log(res)
  // })
    // })

  }

  duplicate(e){
    console.log(e)
   this.formservice.postdata('survey',e).subscribe((res)=>{
    console.log(res)
    this.formservice.delSub.next(res);
   })
  }
}




@Component({
  selector: 'app-deletedialogue',
  templateUrl: './deletedialogue.component.html',
  styleUrl: './question-heading.component.scss'
})

export class deletedialogueComponent implements OnInit {
  @Output() questiondata = new EventEmitter();
  formservices: any;

  constructor(
     public dialogRef: MatDialogRef<EditSurveyComponent>,
         @Inject(MAT_DIALOG_DATA) public data,
         private deleteservice:FormservicesService
  ){
    
  }

  ngOnInit(): void {
    console.log(this.data)
  }
  deleteoption(data){
    // console.log(e)
    this.deleteservice.deletedata('survey',this.data.id).subscribe((res)=>{
    this.deleteservice.delSub.next(res);
  })
  }
    


 
  }





