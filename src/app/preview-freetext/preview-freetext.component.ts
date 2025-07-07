import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-freetext',
  templateUrl: './preview-freetext.component.html',
  styleUrl: './preview-freetext.component.scss'
})
export class PreviewFreetextComponent implements OnInit {
 @Input() previewQuestion
 @Input() header

 ngOnInit(): void {
   console.log(this.previewQuestion, this.header)
 }

}
