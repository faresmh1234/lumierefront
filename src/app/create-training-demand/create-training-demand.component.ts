import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemandeService } from '../service/demande.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingService } from '../service/training.service';
import { EmployeService } from '../service/employe.service';
//import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
@Component({
  selector: 'app-create-training-demand',
  templateUrl: './create-training-demand.component.html',
  styleUrls: ['./create-training-demand.component.css']
})
export class CreateTrainingDemandComponent {

  onetraining:any
  listcategories:any
  list:any
  listdesemploye:any
  constructor(
      private servicedemandeformation:DemandeService,
      private trainingservice:TrainingService,
    private activatedroute:ActivatedRoute,
      private formbuilder:FormBuilder,
      private router:Router,
      private employeservice:EmployeService
     // private modalService: MdbModalService,
  ) { }
  form:FormGroup
  idf:any
  //modalRef: MdbModalRef<ModalComponent> | null = null;
   ide=localStorage.getItem("localid")

  ngOnInit(): void {
    this.getList();

    this.ListFunction();


 this.form=this.formbuilder.group({
        objective:['',Validators.required],
        description:['',Validators.required],









      })
console.log("id is ",this.ide)

  }
getList(){
  this.trainingservice.AllCategories().subscribe(
(res:any)=>{this.list=res;console.log("crealist cat on trainingted",res)},

(error:any)=>{console.log(error)}

  )
}




  create(){

    console.log("resultat",this.form.value)
this.servicedemandeformation.createdemand(this.ide,this.idf,this.form.value).subscribe(
(res:any)=>{console.log("created",res);
//this.router.navigateByUrl("/addmembers")
 let id=res.id

 this.router.navigate(['/addmembers', { param: id }]);

},

(error:any)=>{console.log(error)}
)


  }

  // openModal() {
  //     this.modalRef = this.modalService.open(ModalComponent, {
  //       modalClass: 'modal-dialog-scrollable'
  //     })
  //   }

  ListFunction(){
   this.employeservice.departmentemployers(this.ide).subscribe(
     (res:any)=>{this.listdesemploye=res;console.log("hhhhhhhhh",this.listdesemploye)},
    (error:any)=>{console.log("error",error)}
   )
  }

}
