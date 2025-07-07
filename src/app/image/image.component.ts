import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { preview } from '../single-multiple/single-multiple.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { concatAll } from 'rxjs';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent implements OnInit {
  @Input() type
  @Output() submitquestion = new EventEmitter()
   @Output() tabSelected = new EventEmitter()
  imageForm: FormGroup
  @Input() update
  @Input() form
  fike: void;
  binaryData: string;
  ques_id: any;
  dragAreaClass: string;
constructor( public dialog: MatDialog , private fb:FormBuilder){

}




 ngOnInit(): void {
   this.imageForm = this.createForm()


   if(this.update){
    this.imageForm.patchValue({
      question : this.form.question,
      SPSS: this.form.SPSS,
      questionImage:this.form.questionImage,
      freetext: this.form.freetext,
      none: this.form.none,
      others: this.form.others,
      questionType: this.form.questionType
    })
    
this.ques_id = this.form.id;
  }
 }


 createForm() :  FormGroup{
    return this.fb.group({
      question: new FormControl("", [
        Validators.required,
  
      ]),
      SPSS: [''],
      // options: this._fb.array([this.createOptions()]),
      questionImage: [""],
      questionType: new FormControl("image"),
      freetext: new FormControl(false),
      none: new FormControl(false),
      others: new FormControl(false),
     })
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

     

      
      files: File[] = [];
      previewUrls: string[] = [];
      upload: boolean = false;
      
      imageSelect(event: any) {
        console.log(event.target.files)
        this.onFileChange(event)
        const input = event.target as HTMLInputElement;
        if (input?.files?.length) {
          const file = input.files[0];
          this.files.push(file); 
          const reader = new FileReader();
          reader.onload = () => {
            this.previewUrls.push(reader.result as string);
            this.upload = true;
          };
          this.fike =  reader.readAsDataURL(file);
          this.imageForm.get('questionImage').setValue(this.previewUrls);
         
        }
      }

  @HostListener("dragover", ['$event']) onDragOver(event:any){
      this.dragAreaClass='droparea';
      event.preventDefault();
    }
    
    @HostListener("dragend", ['$event']) OnDragEnd(event:any){
      this.dragAreaClass='droparea';
      event.preventDefault();
    }
    @HostListener("dragleave", ['$event']) OnDragLeave(event:any){
      this.dragAreaClass='droparea';
      event.preventDefault();
    }
    @HostListener("drop", ['$event']) OnDrop(event:any){
      this.dragAreaClass='droparea';
      event.preventDefault();
      event.stopPropagation();
      if(event.dataTransfer.files){
        let files:FileList = event.dataTransfer.files;
        this.saveFiles(files)
      }
    }
     
    selectTab(i:any){
       this.tabSelected.emit(i+1)
    }
  
    onFileChange(e){
      let files: FileList = e.target.files;
      this.saveFiles(files)
    }
  
    saveFiles(files:FileList){
      if(files.length > 1){
        console.log('only one file at a time')
      }else{
        console.log(files[0]);
        // const input = event.target as HTMLInputElement;
        // if (input?.files?.length) {
          const file =files[0];
          this.files.push(file); 
          const reader = new FileReader();
          reader.onload = () => {
            this.previewUrls.push(reader.result as string);
            this.upload = true;
          };
          this.fike =  reader.readAsDataURL(file);
          this.imageForm.get('questionImage').setValue(this.previewUrls);
         
        
      }
    }

      submit(){

        if(this.ques_id){
           let data={
            id:this.ques_id,
            ...this.imageForm.value
          }
          console.log(this.imageForm.value)
          this.submitquestion.emit(data)
        }else{

          console.log(this.imageForm.value)
            this.submitquestion.emit(this.imageForm.value)
        }
      }
    
      }
      
      
         
     
      

