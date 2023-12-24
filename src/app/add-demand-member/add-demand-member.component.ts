import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmployeService } from '../service/employe.service';
import { ActivatedRoute } from '@angular/router';
import { DemandeService } from '../service/demande.service';
import { JSON } from 'src/assets/vendors/tinymce/tinymce';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-demand-member',
  templateUrl: './add-demand-member.component.html',
  styleUrls: ['./add-demand-member.component.css']
})
export class AddDemandMemberComponent implements OnInit{
listdesemploye:any
ide=localStorage.getItem("localid")
iddemande:any
e:any
variable:any
isChecked = false;
form:FormGroup
desDI= []


  constructor(
    private employeservice:EmployeService,
    private route:ActivatedRoute,
     private demandeservice:DemandeService,
     private formbuilder:FormBuilder,
  ){
    this.route.params.subscribe(params => { const parametre = params['param'];
    this.iddemande=parametre
    console.log('Paramètre reçu :', parametre); });

  }
  ngOnInit(): void {
    this.ListFunction();
    this.form=this.formbuilder.group({
        objective:['',Validators.required],
        checkboxes: new FormArray([])


      })

  }

   ListFunction(){
   this.employeservice.departmentemployers(this.ide).subscribe(
     (res:any)=>{this.listdesemploye=res;console.log("hhhhhhhhh",this.listdesemploye)},
    (error:any)=>{console.log("error",error)}
   )
  }

onCheckboxChange(id:any){
  // This method will be called when the checkbox state changes
    console.log('Checkbox state changed:', this.isChecked);
    // Perform actions based on the checkbox state
    if (this.isChecked) {
      this.add(id); // Call a method when checked
    } else {
      this.delete(); // Call a method when unchecked
    }
}

add(id:any){
  let myData: any = {};
  console.log("la valeur de mydata est ",myData)
  this.demandeservice.addmember(this.iddemande,id,myData).subscribe(
    (res:any)=>{this.e=res;console.log("membre ajouté",this.e)},
    (error:any)=>{console.log("error",error)}
  )

}

delete(){

}

onevent(event){

    if(event.target.checked){
      this.desDI.push(event.target.value);
        console.log("le tableau est ",this.desDI)
        console.log("le dernier valeur egale a",event.target.value)
        this.add(event.target.value)
    }

    if(!event.target.checked){
      let i = this.desDI.indexOf(event.target.value);
      this.desDI.splice(i, 1);
    }

    console.log('di---   '+this.desDI)
}

}
