import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { state } from '@angular/animations';
@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrl: './launch.component.scss'
})
export class LaunchComponent implements OnInit{
  data: any;
  listdata:any;
  lunchBtn: any;
  cmptlength: any;
  tgtlength: any;
  selectbutton='tgt';
  toggleBtn = [{name:'Target Cell', type:'tgt', display:true}, {name:'Competitor Cell', type:'cmptt', display:false}]
constructor(private launchdata:ServicesService){}
     selectType='target'
  ngOnInit(): void {
   this.getData()
  }


  getData(){
    this.launchdata.renderData('lunch').subscribe((res)=>{
      console.log(res)
      this.data = res;

      console.log(this.data)
  this.listdata = {}
      this.listdata['target'] = this.data.filter((type) => type.type === 'tgt')
      this.tgtlength =  this.listdata.target.length
      console.log(this.tgtlength)
      this.listdata['cmptt'] = this.data.filter((type) => type.type === 'cmptt')
      this.cmptlength =  this.listdata.cmptt.length
      console.log(this.listdata)
     
  })
}


toggletype(type){
  console.log(type)
 
    this.selectbutton = type
  
  
}
}
