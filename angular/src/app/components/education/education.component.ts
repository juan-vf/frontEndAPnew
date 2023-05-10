import { Component } from '@angular/core';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education-service';
import { ModalSwitchService } from 'src/app/service/modal-switch.service';
import { TokenService } from 'src/app/service/token.service';
import { convertDate } from 'src/main';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education: Education[] = [];
  isLogged = false;
  admin:boolean = false;

  modalEduUpd: boolean;
  modalEdu!: boolean;


  constructor(private eduService: EducationService, private token: TokenService, private $switchEdu: ModalSwitchService, private $switchUpdExp: ModalSwitchService){}

  ngOnInit():void{
    this.admin = this.isAdmin();
    this.$switchEdu.$modal.subscribe((value)=>{
      this.modalEdu = value;
    });
    this.$switchUpdExp.$modal.subscribe((value) => {
      this.modalEduUpd = value;
    })
    this.loadEducation();

    if(this.token.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }


  openModalEduUpd(){
    this.modalEduUpd = true;
  }

  openModalEdu():void{
    this.modalEdu = true;
  }

  loadEducation():void{
    this.eduService.getEdu().subscribe(data => {
      this.education = data;
    })
  }
  deleteEdu(id: number):void{
    if(id != undefined){
      this.eduService.deleteEdu(id).subscribe(data => {
        this.loadEducation();

      }, err => {
        alert("Erro al eliminar Educacion")
      })
    }
  }
  private isAdmin():boolean{
    let auths =  this.token.getAuthorities();
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
