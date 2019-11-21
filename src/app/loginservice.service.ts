import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  rootURL = "http://localhost:55552";

  constructor(private httpClient : HttpClient) {}

   userAuth(username, password){
     var data = "username="+username+"&password="+password+"&grant_type=password";
     var reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-urlencoded'})
     return this.httpClient.post(this.rootURL+'/token',data,{headers : reqHeader});
   }

   getUserType(username,password){
     return this.httpClient.get(this.rootURL+'/api/GetUserType?userName='+username+'&password='+password);
  }
}
