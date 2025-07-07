import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrl: './platform.component.scss'
})
export class PlatformComponent implements OnInit{

  data: any;
  listdata:any;
  lunchBtn: any;
  cmptlength: any;
  tgtlength: any;
constructor(private platformData:ServicesService){}
     selectType='target'
  ngOnInit(): void {
   this.getData()
  }


  getData(){
    this.platformData.renderData('preview').subscribe((res)=>{
     
      this.data = res;

      console.log(this.data)
  this.listdata = {}
      this.listdata['target'] = this.data.filter((type) => type.type === 'tgt')
      this.tgtlength =  this.listdata.target.length
      console.log(this.tgtlength)
      this.listdata['cmptt'] = this.data.filter((type) => type.type === 'cmptt')
      console.log(this.listdata)
     this.lunchBtn =  this.listdata.target.some((state) => state.status == 1)
     this.cmptlength =  this.listdata.cmptt.length
  })
}
}
