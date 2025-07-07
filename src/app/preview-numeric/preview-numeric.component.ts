import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-numeric',
  templateUrl: './preview-numeric.component.html',
  styleUrl: './preview-numeric.component.scss'
})
export class PreviewNumericComponent  implements OnInit{

   @Input() previewQuestion
   @Input() header

   ngOnInit(): void {
     console.log(this.previewQuestion, this.header)
   }
}
