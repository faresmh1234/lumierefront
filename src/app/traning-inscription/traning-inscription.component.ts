import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { InscriptionService } from '../service/inscription.service';

@Component({
  selector: 'app-traning-inscription',
  templateUrl: './traning-inscription.component.html',
  styleUrls: ['./traning-inscription.component.css']
})
export class TraningInscriptionComponent {
inscriptions:any
term:string

constructor(private inscriptionservice:InscriptionService){}

 ngOnInit(){
 this.affichetous()
  }


  affichetous(){
   this.inscriptionservice.affichetous().subscribe(
     (res:any)=>{this.inscriptions=res;console.log("liste",this.inscriptions)},
    (error:any)=>{console.log("error",error)}
   )
  }

  supprimer(id:String)
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
      this.inscriptionservice.supprimer(id).subscribe(
        (res:any)=>{console.log("ok");
this.affichetous()
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
