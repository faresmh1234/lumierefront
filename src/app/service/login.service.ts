import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 constructor(private http:HttpClient) { }
  login(data:any)
  {console.log("cat service")
  //ici code de sauvegarde
    return this.http.post(`${environment.baseUrl}api/auth/signin`,data)}


     logout(data:any)
  {console.log("deconnecter")
  //ici code de sauvegarde
    return this.http.post(`${environment.baseUrl}auth/api/signout`,data)}

     resetpassword(data:any)
  {console.log("cat service")
  //ici code de sauvegarde
    return this.http.get(`${environment.baseUrl}auth/api/resetpwd`,data)}
}
