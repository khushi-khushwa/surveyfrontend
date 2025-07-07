import { Component, HostListener, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'node:stream';
// import { EventEmitter } from 'events';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrl: './create-question.component.scss'
})
export class CreateQuestionComponent implements OnInit{

  @Output() tabSelected = new EventEmitter()
  QuestionTypes = [
    {name: 'Single Choice', icon:'radio_button_checked', type:'single', url:'dashboard/single'},
    {name: 'Multiple Choice', icon:'check_box', type:'multiple', url:'dashboard/single'},
    {name: 'Likert scale', icon:'looks_3', type:'numeric', url:'dashboard/numeric'},
    { name: 'Free Text', icon:'format_color_text', type: 'freetext', url: 'dashboard/freetext' },
    { name: 'Grid/Matrix', icon:'grid_on', type: 'grid', url: 'dashboard/grid' },
    { name: 'Image', icon: 'photo', type: 'image', url: 'dashboard/image' }
  ]
  dragAreaClass: string;

  ngOnInit(): void {
    this. dragAreaClass='dargarea'
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
      console.log('only one file ata time')
    }else{
      console.log(files[0])
    }
  }
}
