import { Component } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ModalSwitchService } from 'src/app/service/modal-switch.service';
import { ProjectService } from 'src/app/service/project.service';
import { TokenService } from 'src/app/service/token.service';
import { convertDate } from 'src/main';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  isLogged:boolean;
  project: Project [] = [];
  modalPrj!:boolean;
  modalPrjUpd!:boolean;
  admin: boolean = false;

  constructor(private tokenService: TokenService, private prjService: ProjectService, private $swithPrj: ModalSwitchService){}

  
  ngOnInit():void{
    this.admin = this.isAdmin()
    this.$swithPrj.$modal.subscribe((value)=>{
      this.modalPrj = value;
    });
    let a = convertDate(this.isLogged);
    this.loadPrj();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  loadPrj(){
    this.prjService.getProject().subscribe(data => {
      this.project = data;
    });
  }
  // expUpdId!:boolean;
  openModalPrj():void{
    this.modalPrj = true;
  }

  openModalExpUpd(id:number){
  }

  deletePrj(id: number):void{
    if(id != undefined){
      this.prjService.deletePrj(id).subscribe(data => {
        this.loadPrj();
      }, err => {
        alert("Error al eliminar El proyecto")
      })
    }
  }
  private isAdmin():boolean{
    let auths =  this.tokenService.getAuthorities();
    let admin;
    auths.filter((auth)=> {if(String(Object.values(auth)) === 'ROLE_ADMIN'){
      admin = "Admin"
    }
    });
    if(admin != undefined){
      return true;
    }
    return false;
  }
  convertDate(date:any){
    return convertDate(date);
  }

}
