import { Component, OnInit } from '@angular/core';
 import {Chart, registerables} from 'node_modules/chart.js';
import { TrainingService } from '../service/training.service';
 Chart.register(...registerables)
@Component({
  selector: 'app-dashboard-formation',
  templateUrl: './dashboard-formation.component.html',
  styleUrls: ['./dashboard-formation.component.css']
})
export class DashboardFormationComponent implements OnInit {

  chartdata:any
labeldata:any[]=[]
labeldataname:any[]=[]
realdata:any[]=[]
colordata:any[]=[]
lisTrainings:any
interndata:any[]=[]
 nbinterne=0
 nbexterne=0
constructor(
  private trainingService:TrainingService
){}
ngOnInit(): void {
this.ListFunction()
}


  renderChart(labeldata:any,maindata:any,type:any,id:any){
    const mychart=   new Chart(id, {
      type:type,
      data: {
        labels: this.labeldata,
        datasets: [{
          label: 'nombre heures',
          data: maindata,
          borderWidth: 1,
        //  backgroundColor:colordata
          backgroundColor:["#F89541","grey"]
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
 renderChartInternexterne(labeldata:any,maindata:any,type:any,id:any){
    const mychart=   new Chart(id, {
      type:type,
      data: {
        labels: ['INTERNE','EXTERNE'],
        datasets: [{
          label: 'nombre heures',
          data: maindata,
          borderWidth: 1,
        //  backgroundColor:colordata
          backgroundColor:["#F89541","grey"]
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
 ListFunction(){
   this.trainingService.AllCategories().subscribe(result => {
    console.log("res training in chart",result);
      this.chartdata = result;
      if(this.chartdata!=null){
        for(let i=0; i<this.chartdata.length ;i++){
          console.log(this.chartdata[i].nom);
          // this.labeldata.push(new Date(this.chartdata[i].dateFin).getFullYear());
           this.labeldata.push(this.chartdata[i].nom);
          console.log(this.labeldata);

          if(this.chartdata[i].type=="INTERNE") {this.nbinterne=this.nbinterne+1}
          else{this.nbexterne=this.nbexterne+1};
          console.log("interne",this.nbinterne);
           console.log("externe",this.nbexterne);
            console.log("interndata",this.interndata);
          this.interndata=[this.nbinterne,this.nbexterne];
          this.realdata.push(this.chartdata[i].nbrhour);
          // this.colordata.push(this.chartdata[i].colorcode)
        }
        // this.renderChart(this.labeldata,this.realdata,this.colordata,"bar","barchart");
        // this.renderChart(this.labeldata,this.realdata,this.colordata,"pie","piechart")
        this.renderChart(this.chartdata,this.realdata,"bar","barchart")
        this.renderChart(this.chartdata,this.realdata,"pie","piechart")
         this.renderChartInternexterne(['INTERNE','EXTERNE'],this.interndata,"pie","piechartinternexterne")
         this.renderChartInternexterne(['INTERNE','EXTERNE'],this.interndata,"horizontalBar","horizontalBar")

        }


    });
  }


}
