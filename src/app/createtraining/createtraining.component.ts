import { Component, OnInit  } from '@angular/core';
import { TrainingService } from '../service/training.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../service/category.service';


@Component({
  selector: 'app-createtraining',
  templateUrl: './createtraining.component.html',
  styleUrls: ['./createtraining.component.css']
})
export class CreatetrainingComponent implements OnInit{
  onetraining:any
  listcategories:any
  list:any
  constructor(
      private trainingservice:TrainingService,
      private categoruservice:CategoryService,
    private activatedroute:ActivatedRoute,
      private formbuilder:FormBuilder,
      private router:Router
  ) { }
  form:FormGroup
  idcat:any

  ngOnInit(): void {
    this.getList();


 this.form=this.formbuilder.group({
        nom:['',Validators.required],
        prix:['',Validators.required],
        etat:['',Validators.required],
         type:['',Validators.required],
         nbrhour:['',Validators.required],
        datedebut:['',Validators.required],
        datefin:['',Validators.required],
        nomformateur:['',Validators.required],
        description:['',Validators.required],






      })


  }
getList(){
  this.categoruservice.AllCategories().subscribe(
(res:any)=>{this.list=res;console.log("crealist cat on trainingted",res)},

(error:any)=>{console.log(error)}

  )
}




  create(){

    console.log("resultat",this.form.value)
this.trainingservice.Createwhithcat(this.idcat,this.form.value).subscribe(
(res:any)=>{console.log("created");
this.router.navigateByUrl("/training")},
(error:any)=>{console.log(error)}
)

  }



}
