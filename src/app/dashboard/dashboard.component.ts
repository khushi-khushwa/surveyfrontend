import { Component, input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../service/services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  slength:any[]=[];

  keys: any;
  obj: { length: string; keys: string }[] = [];
  ress: any;
  alldata: any;
constructor(private fb:FormBuilder, private api:ServicesService , private router:Router){
}

selectedCampTypes:any;
selectoption:any[]=[]


cmpForm : FormGroup
 selectForm: FormGroup

ngOnInit(): void {
   this.cmpForm = this.fb.group({
    selectcmp : ['', Validators.required]
   }) ;

   this.selectForm = this.fb.group({
    selectoption: ['', Validators.required]
   })

   this.api.getdata('dashboard').subscribe((res)=>{
    console.log(res)
    this.ress = res[0]
    console.log(this.ress)
    this.keys = Object.keys(this.ress)
       for(let i of this.keys ){
        console.log(this.ress[i].length)
        const length = this.ress[i].length ;
        
        this.obj.push({length: length.toString() ,keys:i})
        console.log(this.slength)
      
        
       }
     
     console.log(this.obj );
    
   })
  // this.api.getdata().subscribe((res: any)=>{
  //   console.log(res)
  //   this.ress = res['response']
  //   console.log(this.ress);
    
  //   this.keys = Object.keys(this.ress)
  //      for(let i of this.keys ){
  //       console.log(this.ress[i].length)
  //       this.slength.push(this.ress[i].length)
  //       console.log(this.slength)
  //       // this.obj['length']=ress[i].length
  //      }
  //     //  this.obj['keys']= sg
  //    console.log(this.keys );
  //  })

}

formroute(){
  console.log('click')
this.router.navigate(['dashboard', 'details'])
}


selectsurvey(key:any, i){
  console.log(key)
this.alldata= this.ress[key]
console.log(this.alldata)
this.selectedCampTypes=i
}
}


