import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.scss'
})


export class ConfigurationComponent  implements OnInit{
 

  data: any;
  listdata:any;
  lunchBtn: any;
  cmptlength: any;
  tgtlength: any;
     selectType='tgt'


     configuration:any = {
      tiktok:[{name:'Default  TikTok configuration',type:'default',id:0}],
      instagram:[{name:'Default Instagram configuration',type:'default',id:0}],
      youtube:[{name:'Default Youtube configuration',type:'default',id:0}],
      hulu:[{name:'Default Hulu configuration',type:'default',id:0}],
      prime:[{name:'Default Prime configuration',type:'default',id:0}],
      netflix:[{name:'Default Netflix configuration',type:'default',id:0}],
    }
  configure: any;

  constructor(private configureservice:ServicesService  ,private fb:FormBuilder){}

   mainForm : FormGroup
  ngOnInit(): void {

     this.mainForm = this.fb.group({
      tgt:this.fb.array([])
     })

     this.getdata()
console.log(this.mainForm) 

let c = Object.keys(this.configuration);
for(let n of c){
    console.log(this.configuration[n])

    this.configure=this.configuration[n]
}
}



getdata() {
  this.configureservice.renderData('configure').subscribe((res) => {
    console.log(res);

    this.data = res;
    console.log(this.data);

    this.listdata = {};
    this.listdata['tgt'] = this.data.filter((item: any) => item.type === 'tgt');

    const tgtArray = this.mainForm.get('tgt') as FormArray;

    this.listdata['tgt'].forEach((item: any) => {
      const group = this.fb.group({
        id: [item.id, Validators.required],
        configuration: [item.configuration, Validators.required]
      });
      tgtArray.push(group);
    });

    console.log('Final Form:', this.mainForm);
  });
}

}
