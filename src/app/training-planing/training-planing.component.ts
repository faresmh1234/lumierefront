import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { TrainingService } from '../service/training.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-training-planing',
  templateUrl: './training-planing.component.html',
  styleUrls: ['./training-planing.component.css']
})
export class TrainingPlaningComponent {
 lisTrainings:any
term:any
public value=""
Dates = []
  Dates2 = []
  form:FormGroup
constructor(private trainingService:TrainingService,
  private formbuilder:FormBuilder){}

 ngOnInit(){
 this.ListFunction();
 this.form=this.formbuilder.group({
  nom:['',Validators.required],
  etat:['',Validators.required],
  type:['',Validators.required],
  datedebut:['',Validators.required],
  datefin:['',Validators.required]
 })

  }


  ListFunction(){
   this.trainingService.AllCategories().subscribe(
     (res:any)=>{this.lisTrainings=res;console.log("liste",this.lisTrainings)
  this.Dates = []
        this.Dates2 = []
        this.lisTrainings.map((item: any) => (
          this.Dates.push(new Date(item.datedebut).getDay() +
            "/" + new Date(item.datedebut).getMonth() +
            "/" + new Date(item.datedebut).getFullYear()),
            this.Dates2.push(new Date(item.datefin).getDay() +
            "/" + new Date(item.datefin).getMonth() +
            "/" + new Date(item.datefin).getFullYear())
        )
        );



    },
    (error:any)=>{console.log("error",error)}
   )
  }

  openModal(p:any){
    this.form.patchValue({
      nom:p.nom,etat:p.etat,
      type:p.type,datedebut:p.datedebut,
      datefin:p.datefin
    })
    alert("hhhhhhh")
  }

  deleteone(id:String)
{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.trainingService.Delete(id).subscribe(
        (res:any)=>{console.log("ok");
this.ListFunction()
      },
      (error:any)=>{console.log("error is",error)}
      )
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}
}
