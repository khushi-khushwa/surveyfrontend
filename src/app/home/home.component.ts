import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isSidebarOpen:boolean=true;
  sidebar=[
    {name:'Dashboard', display:true, link:'dashboard', disbled:true},
    {name:'Details', display:true, link:'/dashboard/details', disbled:true},
    {name:'Assets', display:true, link:'/dashboard/assets', disbled:true},
    {name:'Configure', display:true, link:'/dashboard/configure', disbled:true},
    {name:'Platform data', display:true, link:'/dashboard/platform', disbled:true},
    {name:'Survey & Tags', display:true, link:'/dashboard/survey-tags', disbled:true},
    {name:'Quota', display:true, link:'/dashboard/quota', disbled:true},
    {name:'Preview & Launch', display:true, link:'/dashboard/launcher',disbled:true},
     {name:'graph', display:true, link:'/dashboard/graph',disbled:true},
  
  ]

  constructor(private route:Router){

  }
  
  sidenav(opened){
   console.log(opened)
    const sidebar = document.getElementsByClassName('dashboard')[0] as HTMLElement;
    const content = document.getElementsByClassName('datadiv')[0] as HTMLElement;

    if (opened === true) {
      if (sidebar) sidebar.style.display = 'none';
      if (content) content.style.width = '100%';
    } else {
      if (sidebar) sidebar.style.display = 'block';
      if (content) content.style.width = '88%';
    }
     
  }
  // isSidebarOpen: boolean = true;

  }
 


