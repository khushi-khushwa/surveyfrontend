import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-linkcomponent',
  templateUrl: './linkcomponent.component.html',
  styleUrl: './linkcomponent.component.scss'
})
export class LinkcomponentComponent {
 @Input() data:any

option:boolean=false;
 
optionclick(name){
  console.log(name)

  if(name === 'Survey'){
    this.option=true;
  }
}


}
