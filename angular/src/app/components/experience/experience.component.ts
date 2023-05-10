import { Component } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { ExperienceService} from 'src/app/service/experience-service';
import { ModalSwitchService } from 'src/app/service/modal-switch.service';
import { TokenService } from 'src/app/service/token.service';
import { UpdateExpService } from 'src/app/service/update-exp.service';
import { convertDate } from 'src/main';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experience: Experience[] = [];

  modalExp!:boolean;
  modalExpUpd!:boolean;
  expUpdId!:boolean;
  admin: boolean = false;

  constructor(
    private expService: ExperienceService,  
    private tokenService: TokenService, 
    private $swithExp: ModalSwitchService, 
    private $switchUpdExp: ModalSwitchService, 
    private $switchId: UpdateExpService){}

  isLogged = false;
  ngOnInit(){
    this.admin = this.isAdmin()
    this.$swithExp.$modal.subscribe((value)=>{
      this.modalExp = value;
    });
    this.$switchUpdExp.$modal.subscribe((value)=>{
      this.modalExpUpd = value;
    });
    this.loadExp()
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  
  loadExp():void{
    this.expService.getExperiences().subscribe(data=>{
      this.experience = data;
      console.log(this.experience);
    })
  }

  openModalExp():void{
    this.modalExp = true;
  }
  openModalExpUpd(id: number):void{
    this.$switchId.$modal.emit(id);
    
    this.modalExpUpd = true;
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
  openModalExpDel():void{}

  deleteExp(id: number):void{
    if(id != undefined){
      this.expService.deleteExp(id).subscribe(data => {
        this.loadExp();
      }, err => {
        alert("Error al eliminar la experiencia")
      })
    }
  }
  convertDate(date:any){
    return convertDate(date);
  }
}
