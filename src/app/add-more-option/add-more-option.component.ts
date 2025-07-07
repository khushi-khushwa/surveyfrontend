import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-more-option',
  templateUrl: './add-more-option.component.html',
  styleUrl: './add-more-option.component.scss'
})
export class AddMoreOptionComponent implements OnInit{
@Input() optionform
  extraOption=[{name:'more option'},{name:'other'}, {name:'freetext'}, {name :'none'}]

  constructor( private fb:FormBuilder){

  }

ngOnInit(): void {
  console.log(this.optionform)

}

addMoreOption(e){
  console.log(e)
  const type = e
  this.optionform.push(this.fb.group({
    option : new FormControl({
      value:  
      type === 'none' 
      ? 'nothing'
       : type === 'other' 
       ? ' on any other' 
       : type === 'freetext' 
       ? 'write your views' 
       : "" ,
       disabled: false,
    }),
    type:type,
    SPSS :['']
  })
)
}


}
