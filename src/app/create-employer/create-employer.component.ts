import { Component } from '@angular/core';
import { EmployeService } from '../service/employe.service';
import { DepartementService } from '../service/departement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SiteService } from '../service/site.service';

@Component({
  selector: 'app-create-employer',
  templateUrl: './create-employer.component.html',
  styleUrls: ['./create-employer.component.css']
})
export class CreateEmployerComponent {
  one:any
  listdepartement:any
  list:any
  idsite:any
  listsite:any
  constructor(
    private sitesrevice:SiteService,
      private employeservice:EmployeService,
      private departementservice:DepartementService,
    private activatedroute:ActivatedRoute,
      private formbuilder:FormBuilder,
      private router:Router
  ) { }
  form:FormGroup
  iddep:any

  ngOnInit(): void {
    this.getList();
this.ListsiteFunction()

 this.form=this.formbuilder.group({
        username:['',Validators.required],
        email:['',Validators.required],
        address:['',Validators.required],
        phone:['',Validators.required],
        firstname:['',Validators.required],
        lastname:['',Validators.required],
        cin:['',Validators.required],
                password:['',Validators.required],

      })


  }
getList(){
  this.departementservice.All().subscribe(
(res:any)=>{this.list=res;console.log("crealist cat on trainingted",res)},

(error:any)=>{console.log(error)}

  )
}

  creer(){
    let formdata = new FormData()
     formdata.append("lastname",this.form.value.lastname),
     formdata.append("firstname",this.form.value.firstname),
     formdata.append("username",this.form.value.username),
     formdata.append("phone",this.form.value.phone),
     formdata.append("email",this.form.value.email),
     formdata.append("address",this.form.value.address),
          formdata.append("Role","ROLE_EMPLOYE"),


    console.log("resultat",this.form.value)
this.employeservice.signupemployer(this.iddep,this.idsite,this.form.value).subscribe(
(res:any)=>{console.log("created");
this.router.navigateByUrl("/employe")},
(error:any)=>{console.log(error)}
)

  }
   ListsiteFunction(){
   this.sitesrevice.All().subscribe(
     (res:any)=>{this.listsite=res;console.log("listesite",this.listsite)},
    (error:any)=>{console.log("error",error)}
   )
  }


}
