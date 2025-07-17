import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent implements OnInit{

  constructor(private service:ServicesService , private fb:FormBuilder){

  }
  assets:any
     metrics:any
    graphForm : FormGroup
chart:any;
 selectedColor: string = 'pink';
  updateFlag:boolean = false;
chartSeries: any[] = [];
  selectvalue=[]
  loader:boolean=false
colorpicker=[]
 lineColor;
 index=0;
 togglecolor = ['dark','light']
 isInitiallyChecked:boolean = true;
  ngOnInit(): void {
     this.graphForm=this.fb.group(
     this.createForm()
     )
this.loader=true;
    this.service.renderData('graph').subscribe((res)=>{
      console.log(res)
      if(res){
        //  / let data = re;
        //   console.log(data)
             this.assets=res[0]['graphdata']
             console.log(this.assets);
         this.metrics = Object.keys(this.assets[0].data[0]).filter(key => key !== 'time');

     this.selectvalue=this.assets[0].cnt_name
             console.log( this.assets[0].cnt_name) ;
      
   this.graphForm.get('cnt_name').setValue([this.selectvalue]);
      this.graphForm.get('metrics').setValue(this.metrics[0]);

       this.submit() 
       this.loader=false;
      }
    })


  }
  ngOnChanges(): void {
 
}

toggle(t){
   console.log(t)
 
   if(t === 'dark'){
      this.index++
       this.chart.update({
    chart: {
      backgroundColor: 'white'
    },
     title: {
      style: { color: 'black' }
    },
     xAxis: {
      title: { style: { color: 'black' } },
      labels: { style: { color: 'black' } },
      crosshair: true,
    },
    yAxis: {
      title: { style: { color: 'black' } },
      labels: { style: { color: 'black' } },
    } ,
    legend: {
      itemStyle: { color: 'black' }
    },

   })

   }
   else if (t === 'light'){
    this.index--
         this.chart.update({
    chart: {
      backgroundColor: 'black'
    },
     title: {
      style: { color: 'white' }
    },
     xAxis: {
      title: { style: { color: 'white' } },
      labels: { style: { color: 'white' } },
      crosshair: true,
    },
    yAxis: {
      title: { style: { color: 'white' } },
      labels: { style: { color: 'white' } },
    } ,
    legend: {
      itemStyle: { color: 'white' }
    },

   })
   }
}
  createForm(){
return {
   cnt_name:[''],
   metrics:['']
  }
}
changevalue(e){
  if(e){
     this.selectvalue = e.value;

   }else{
    this.selectvalue= this.selectvalue.filter((match)=> match != e.value)
   }
    this.graphForm.get('cnt_name').setValue(this.selectvalue);
    console.log(this.selectvalue)
}

selectColor(e, index){
  console.log(e.target.value.toString())
  let newColor =e.target.value
   this.chart.series[index].update({
      color:newColor
   }) 
}

submit() {
   this.loader=true;
  const selectedMetric = this.graphForm.get('metrics')?.value;
  console.log(this.selectvalue.length)
const addnew =  this.graphForm.get('cnt_name').value
  const selectedAssets = this.assets.filter(item =>
    this.selectvalue.includes(item.cnt_name)
    
  );

  
   if(this.chart){
    this.chart.destroy()
   }
   this.chartSeries=[]
  selectedAssets.forEach(asset => {
    const timeSeries = asset.data.map((d, index) => {
      return [index, d[selectedMetric]];
    });

    this.chartSeries.push({
      name: `${asset.cnt_name} - ${selectedMetric}`,
      type: 'spline',
      data: timeSeries,
      
    });

  });

  

  this.chart = Highcharts.chart('chartcontainer', {
    chart: {
      type: 'spline',
      backgroundColor: 'black',
        style: { color: 'blue' }
    },
    title: {
      text: 'Per Second Emotional Journey',
      style: { color: '#ffffff' }
    },
    xAxis: {
      title: { text: 'Time in sec', style: { color: '#ffffff' } },
      labels: { style: { color: '#ffffff' } },
      crosshair: true,
      gridLineColor: '#ff00ff',
       tickColor: '#ff8c1a',
       lineColor: '#197F07',
    },
    yAxis: {
      title: { text: selectedMetric, style: { color: '#ffffff' } },
      labels: { style: { color: '#ffffff' } },
   gridLineColor: '#C0C0C0',
    },
    legend: {
      itemStyle: { color: '#ffffff' }
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: true,
              radius: 5
            }
          }
        }
      }
    },
    tooltip: {
      shared: true,
     
      formatter: function () {
        let tooltip = `<b>Second: ${this.x}</b><br/>`;
        this.points?.forEach(point => {
          const name = point.series.name;
          let symbol = '\u25CF';
          tooltip += `<span style="color:${point.color}">${symbol}</span> ${name}: <b>${point.y.toFixed(2)}</b><br/>`;
        });
        return tooltip;
      }
    },

    series: this.chartSeries
  });

for(let i=0 ; i<this.chart.series.length; i++){
        console.log(this.chart.series[i].color);
        // this.lineColor = this.chart.series[i].color
       
 console.log(addnew)
 if(addnew.length > 1){
         this.colorpicker = []
          addnew.filter((item, i)=>{
            console.log(item)
this.colorpicker.push(
{name:`${item}-${selectedMetric}`, type:'color', value:this.chart.series[i].color }) 
  
            //  }
          })

    
}else{
 this.colorpicker.push(
{name:`${this.selectvalue}-${this.metrics[0]}`, type:'color'  , value:this.chart.series[i].color }
 ) 
}
}
  this.updateFlag = true;
  this.loader=false;


}

}
