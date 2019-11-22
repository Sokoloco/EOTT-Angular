import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import { HttpErrorResponse} from '@angular/common/http';
import { Queja } from 'src/app/_models/quejasmodel';
import {MdbTableDirective} from "angular-bootstrap-md";


@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.css']
})
export class QuejasComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  elements: any = [];
    headElements = ['Usuario', 'Fecha', 'Comentario', 'Estrellas Asignadas'];
    
  searchText: string = '';
  previous: string;

  constructor(private adminService : AdminService ) { }

  @HostListener('input') oninput() {
    this.searchItems();
  }

  ngOnInit() {
    this.adminService.getquejas("").subscribe((data : any)=>{
      let ans : Queja[] = JSON.parse(data);
      ans.forEach((Queja)=> this.elements.push({user : Queja.correo, date:Queja.fecha 
        ,comm: Queja.queja ,stars:Queja.rating}));

  },
  (erorr : HttpErrorResponse)=>{});
  this.mdbTable.setDataSource(this.elements);
  this.previous = this.mdbTable.getDataSource();
  }

  searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.elements = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }
  }