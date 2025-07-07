import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-grid',
  templateUrl: './preview-grid.component.html',
  styleUrl: './preview-grid.component.scss'
})
export class PreviewGridComponent implements OnInit{

  
  @Input() previewQuestion
  @Input() header
   ngOnInit(): void {
     console.log(this.previewQuestion)
   }

}
