import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss'
})
export class OptionComponent implements OnInit{
 @Input() options
@Input() question
@Input() type
@Input() value
  itemse: any;
 ngOnInit(): void {

   console.log(this.question)
   console.log(this.type)
   console.log(this.value)
   console.log(this.options)
 }
}
