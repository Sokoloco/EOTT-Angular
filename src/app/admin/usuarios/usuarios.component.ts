import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import { HttpErrorResponse} from '@angular/common/http';
import { Infousuario } from 'src/app/_models/inforusuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarioActu : Infousuario;

  constructor(private adminService : AdminService ) { }

  ngOnInit() {

  }
  searchuser(id){
    this.adminService.getusuario(id).subscribe((data : any)=>{
      this.usuarioActu = JSON.parse(data);
      console.log(this.usuarioActu);
  },
  (erorr : HttpErrorResponse)=>{});
  }

}
