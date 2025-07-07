import { Component } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { FormGroup , FormBuilder, FormArray, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrl: './assets.component.scss'
})
export class AssetsComponent {
 data: any;
 loader:boolean=false;
  listdata:any;
  lunchBtn: any;
  cmptlength: any;
  tgtlength: any;
  croppedImageSrc: string | ArrayBuffer;
 uploadForm: FormGroup;
  thumbnails: string[] = []; 
  videoUrl: string | null = null;
  uploaded: boolean=false;
  selectbutton='tgt';
  videoupload:boolean = false


     toggleBtn = [{name:'Target Cell', type:'tgt', display:true}, {name:'Competitor Cell', type:'cmptt', display:false}]
constructor(private assetsdata:ServicesService, private fb:FormBuilder){}
     selectType='target'
  ngOnInit(): void {
   
   this.uploadForm = this.fb.group({
    upload: this.fb.array([
      
    ])
   })
   
   this.xdata()
  }


  xdata(){

    this.assetsdata.renderData('assets').subscribe((res)=>{
     
      this.data = res;

      console.log(this.data)
  this.listdata = {}
      this.listdata['target'] = this.data.filter((type) => type.type === 'tgt')
      this.tgtlength =  this.listdata.target.length
      console.log(this.tgtlength)
      this.listdata['cmptt'] = this.data.filter((type) => type.type === 'cmptt')
      this.cmptlength =  this.listdata.cmptt.length
      console.log(this.listdata)
      this.uploadForm.addControl('study_name',  new FormControl(this.listdata.target[0].study_name))
      this.uploadForm.addControl('target_name',  new FormControl(this.listdata.target[0].survey_title))
         

     
const uploadArray =  this.uploadForm.get('upload') as FormArray;

      this.listdata['target'].forEach((item: any) => {
        const group = this.fb.group({
          id: [item.id, Validators.required],
          cell_name: [item.cell_name, Validators.required],
          platform: [item.platform, Validators.required],
          cell_video_url: [item.cell_video_url, Validators.required]
        });
        uploadArray.push(group);
      });
      console.log(this.uploadForm)
  })
}

addControls(formControlName: string, value: any) {
  this.uploadForm.addControl(formControlName, new FormControl(value));
}

toggletype(type){
  console.log(type)
 
    this.selectbutton = type
}

captureThumbnails(event: any) {
  const file = event.target.files[0]; 
  console.log(file)
  if (!file) return;
  this.videoUrl = URL.createObjectURL(file); 
  console.log(this.videoUrl);
  this.uploaded = true;
  const video = document.createElement('video'); 
  video.src = this.videoUrl;
  video.onloadedmetadata = () => {
    const duration = video.duration; 
    const interval = duration / 5; 
    console.log(interval)
    this.generateFrames(video, interval);
  };

  this.convertToBase64(event);
}


generateFrames(video: HTMLVideoElement, interval: number) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const totalFrames = 1;
  canvas.width = 200;
  canvas.height = 150;

  let count = 0;

  const captureFrame = (time: number) => {
    video.currentTime = time;
    console.log(video.currentTime);
    video.onseeked = () => {
      ctx!.drawImage(video, 0, 0, canvas.width, canvas.height);
      this.thumbnails.push(canvas.toDataURL('image/png'));
      count++;
      if (count < totalFrames) {
        captureFrame(time + interval);
      }
    };
  };

  // captureFrame(interval);
}

base64Video: string | null = null; 

convertToBase64(event: Event) {
  const target = event.target as HTMLInputElement;
  if (!target.files || target.files.length === 0) {
    console.log("No file selected");
    return;
  }

  const file = target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    this.base64Video = reader.result as string;
    console.log(this.base64Video); 
    this.videoupload = !this.videoupload
  };

  reader.onerror = (error) => {
    console.error(error);
  };

  reader.readAsDataURL(file);
}


removeCell(i){
  const data = this.uploadForm.get('upload')
  this.listdata[this.selectType].splice(i)
}


}
