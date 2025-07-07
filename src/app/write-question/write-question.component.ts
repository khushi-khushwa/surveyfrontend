import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-write-question',
  templateUrl: './write-question.component.html',
  styleUrl: './write-question.component.scss'
})
export class WriteQuestionComponent {

  @Input() question
  @Input() que_id
 
}
