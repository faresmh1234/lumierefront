import { Component } from '@angular/core';
import { TrainingService } from '../service/training.service';
import { CategoryService } from '../service/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-training',
  templateUrl: './update-training.component.html',
  styleUrls: ['./update-training.component.css']
})
export class UpdateTrainingComponent {
  public value=""
  form:FormGroup
  id=this.activatedrouted.snapshot.params['id']
  training:any
  //pour chercher
  term:any
  listcat:any

  idcat:any



    constructor(
      private trainingservice:TrainingService,
      private categoryservice:CategoryService,
      private router:Router,
      private formbuilder:FormBuilder,
      private activatedrouted:ActivatedRoute,

      ) { }
ngOnInit(): void {
  this.uneformation()
  this.ListcatFunction()
  this.form=this.formbuilder.group({


      nom:['',Validators.required],
      description:['',Validators.required],
      etat:['',Validators.required],
      type:['',Validators.required],
      datedebut:['',Validators.required],
      datefin:['',Validators.required],
       nbrhour:['',Validators.required],
      nomformateur:['',Validators.required],

    })

}


 uneformation(){
    this.trainingservice.One(this.id).subscribe(
      (res)=>{this.training=res; console.log("formation",res)
      this.form.patchValue({
      nom:this.training.nom,
      description:this.training.description,
       etat:this.training.etat,
      type:this.training.type,
        datedebut:this.training.datedebut,
        datefin:this.training.datefin,
         nbrhour:this.training.nbrhour,
                nomformateur:this.training.nomformateur,

     })
    },

      (error)=>{console.log(error)})
  }


  update(){
let formdata = new FormData()
     formdata.append("nom",this.form.value.nom),
     formdata.append("description",this.form.value.description),
     formdata.append("etat",this.form.value.etat),
     formdata.append("type",this.form.value.type),
     formdata.append("datedebut",this.form.value.datedebut),
     formdata.append("datefin",this.form.value.datefin),
       formdata.append("nbrhour",this.form.value.nbrhour),
          formdata.append("nomformateur",this.form.value.nomformateur),



    this.trainingservice.updatewhithcat(this.id,this.idcat,formdata).subscribe(
     (res:any)=>{this.training=res;console.log("employe",this.training);
    this.router.navigateByUrl("/training")
    },
    (error:any)=>{console.log("error",error)}
   )
   }

  ListcatFunction(){
   this.categoryservice.AllCategories().subscribe(
     (res:any)=>{this.listcat=res;console.log("listeCategory",this.listcat)},
    (error:any)=>{console.log("error",error)}
   )
  }




}
