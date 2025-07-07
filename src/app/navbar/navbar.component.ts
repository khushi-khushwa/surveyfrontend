import { Component, EventEmitter, Output, output } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Output() buttonClicked = new EventEmitter();
constructor(private route:Router){

}

opened:boolean=false;

  logout(){
   this.route.navigate(['login']) 
  }

  arrow(){
 this.opened = !this.opened
   this.buttonClicked.emit(this.opened)
     
  }

}
