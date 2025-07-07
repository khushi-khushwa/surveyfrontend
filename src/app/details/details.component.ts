import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  constructor(private fb: FormBuilder, private route:Router) {

  }


  left: any;
  right: any;
  // createform:boolean = false;
  personal: FormGroup;
  activeborder: any;
  podhide: boolean = false;
  allform: any = [
    [
      {
        name: "study",
        formGroup: "studyDetails",
        heading: "Study Details",
        images: [{ image: "assets/tv.gif" }, { image: "assets/mobile.gif" }],
        formControls: [
          {
            name: "studyname",
            type: "text",
            placeholder: "Study Name",
            required: true,
          },
          {
            name: "distribution",
            type: "select",
            placeholder: "Distribution",
            required: true,
            Options: [{ name: "Theatrical" }, { name: "Streaming" }],
          },
          {
            name: "Platform",
            type: "select",
            placeholder: "Code Platform",
            required: true,
            Options: [
              { name: "Instagram" },
              { name: "TikTok" },
              { name: "YouTube" },
            ],
          },
          {
            name: "country",
            type: "select",
            placeholder: "Country ",
            required: true,
            Options: [{ name: "USA" }, { name: "India" }],
          },
          {
            name: "language",
            type: "select",
            placeholder: "Language ",
            required: true,
            Options: [{ name: "English" }, { name: "Spanish" }],
          },
        ],
        dynamicGroup: [],
      },
    ],

    [
      {
        name: "title",
        formGroup: "titledetail",
        heading: "Title in Survey",
        formControls: [
          {
            name: "name",
            placeholder: "Target Name ",
            type: "text",
            required: true,
            Options: [],
          },
          {
            name: "competitor",
            required: true,
            type: "multiple",
            controls: [
              {
                name: "comp",
                type: "text",
                placeholder: "Competitor Cell Name",
              },
            ],
          },
          {
            name: "pod",
            required: true,
            type: "multiple",
            hidden: true,
            controls: [
              { name: "adpod", type: "text", placeholder: "pod Cell Name" },
            ],
          },
        ],
      },

      {
        name: "cell",
        formGroup: "celldetail",
        heading: "Cell In Detail",
        formControls: [
          {
            name: "cellname",
            required: true,
            type: "multiple",
            controls: [
              { name: "cell", type: "text", placeholder: "Target Cell Name" },
            ],
          },
        ],
      },
    ],
  ];
 

  toggleInput(i: any) {
    if (i == 0) {
      this.podhide = true;
      this.activeborder = i;
    } else {
      this.podhide = false;
      this.activeborder = i;
    }
  }

  ngOnInit(): void {
    this.personal = this.fb.group({});
    for (let i = 0; i < this.allform.length; i++) {
      // console.log(this.allform.length);
      this.left = this.allform[0];
      this.right = this.allform[1];
      for (let j = 0; j < this.allform[i].length; j++) {
        this.addGroup(this.personal, this.allform[i][j].formGroup);
        for (let k = 0; k < this.allform[i][j].formControls.length; k++) {
          if (this.allform[i][j].formControls[k].type == 'multiple') {
            this.addGroup(
              this.personal.get(this.allform[i][j].formGroup),
              this.allform[i][j].formControls[k].name,
              true
            );
            (
              (
                this.personal.get(this.allform[i][j].formGroup) as FormGroup
              ).get(this.allform[i][j].formControls[k].name) as FormArray
            ).push(this.fb.group({}));
            for (
              let l = 0;
              l < this.allform[i][j].formControls[k].controls.length;
              l++
            ) {
              this.addControl(
                this.personal
                  .get(this.allform[i][j].formGroup)
                  .get(this.allform[i][j].formControls[k].name)
                  .get(l.toString()),
                this.allform[i][j].formControls[k].controls[l].name
              );
            }
          } else {
            this.addControl(
              this.personal.get(this.allform[i][j].formGroup),
              this.allform[i][j].formControls[k].name
            );
            // console.log(this.personal);
          }
        }
      }
      
    }
  }

 



  addGroup(group: any, control: any, multiple: boolean = false): void {
    if (multiple) {
      group.addControl(control, this.fb.array([]));
    } else {
      group.addControl(control, this.fb.group({}));
    }
  }

  addControl(group: any, control: any, value: any = '') {
    group.addControl(control, new FormControl(value, Validators.required));
  }
 

  addform(name: string, target: any): void {
    // console.log(name);
    if (name === 'competitor') {
      let formArray = this.personal
        .get('titledetail')
        .get('competitor') as FormArray;
      let newGroup = this.fb.group({
        comp: ['', Validators.required],
      });
      formArray.push(newGroup);
    } else if (name === 'cellname') {
      let formArray = this.personal
        .get('celldetail')
        .get('cellname') as FormArray;
      let newGroup = this.fb.group({
        cell: ['', Validators.required],
      });
      formArray.push(newGroup);
    } else if (name === 'pod') {
      let formArray = this.personal.get('titledetail').get('pod') as FormArray;
      let newGroup = this.fb.group({
        adpod: ['', Validators.required],
      });
      formArray.push(newGroup);
    }
    target.controls.push(target.controls[0]);
    // console.log(this.personal);
  }
 
  removeEntry(name: any, target: any, index: number) {
    // console.log(target);
    target.controls.splice(index, 1);

    if (name === 'competitor') {
      let controltitle = this.personal
        .get('titledetail')
        .get('competitor') as FormArray;
      console.log(controltitle);
      if (controltitle) {
        controltitle.removeAt(index);
      }
    } else if (name === 'cellname') {
      let controlcell = this.personal
        .get('celldetail')
        .get('cellname') as FormArray;
      // console.log(controlcell);
      if (controlcell) {
        controlcell.removeAt(index);
      } else if (name === 'pod') {
        let controlpod = this.personal
          .get('celldetail')
          .get('cellname') as FormArray;
        // console.log(controlpod);
        if (controlpod) {
          controlpod.removeAt(index);
        }
      }
     
    }
  }
  
  submit() {
    console.log(this.personal.value);
     this.route.navigate(['dashboard/assets'])
  }
}
