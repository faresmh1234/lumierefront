import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   form:FormGroup
constructor(
  private servicelogin:LoginService,
  private formbuilder:FormBuilder,
    private  router: Router
){}

  ngOnInit(): void {
     this.form=this.formbuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })

  }



  signin(){
    console.log("access to login")
    this.servicelogin.login(this.form.value).subscribe(
    (res:any)=>{console.log("res",res);
//if
      localStorage.setItem("token",res.accessToken);
       localStorage.setItem("localid",res.id);

      console.log(localStorage.getItem("token"));
      localStorage.setItem("state","0")
   this.router.navigateByUrl("/home")
  },
  (error:any)=>{console.log(error)})

 }

}
