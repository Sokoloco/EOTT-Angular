import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Role } from '../_models/role';
import { User } from '../_models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userType : string;
  LoginName:string;
  Password:string;
  isLogginError : boolean = false;
  isNotAdmin : boolean = false;
  constructor(private loginserviceService : LoginserviceService,private router : Router) { }

  ngOnInit() {
  }

  login(UserName,Password){
    this.loginserviceService.userAuth(UserName,Password).subscribe((data : any)=>{
      localStorage.setItem('userToken',data.access_token);
      this.changeRoute(UserName,Password);
    },
    (erorr : HttpErrorResponse)=>{
      this.isLogginError = true;
    });
  }

  changeRoute(userName,password){ 
    var userType = this.loginserviceService.getUserType(userName,password).subscribe((data : any)=>{
      localStorage.setItem('userType',data);
      if(data === "Admin"){
        this.router.navigate(['./admin']);
      }if (data === "MenuAdmin") {
        this.router.navigate(['./menu']);
      }else{ //TODO create this function, displays when a user is trying to acces but is not an admin.
        this.isNotAdmin = true;
      }
    },
    (erorr : HttpErrorResponse)=>{
      this.isLogginError = true;
    }); 
  }  
}
