import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-image',
  templateUrl: './preview-image.component.html',
  styleUrl: './preview-image.component.scss'
})
export class PreviewImageComponent   implements OnInit{

   @Input() previewQuestion
   @Input() header

   ngOnInit(): void {
    console.log(this.previewQuestion, this.header)
   }
}
