import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Queja } from '../_models/quejasmodel';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  rootURL = "http://localhost:55552";

  constructor(private httpClient : HttpClient) {}

   getquejas(name) {
     return this.httpClient.get(this.rootURL+'/api/admi/getquejas?nombre='+name);
   }
}
