import { Component } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { ModalSwitchService } from 'src/app/service/modal-switch.service';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill [] = [];

  modalSkill:boolean = false;
  modalSkillUpd:boolean = false;
  admin: boolean = false;
  isLogged: boolean = false;

  constructor(
    private skillService:SkillService,
    private tokenService:TokenService,
    private $swithSkill: ModalSwitchService,
    private $swithUpdSkill: ModalSwitchService,
  ){}

  ngOnInit(){
    this.admin = this.isAdmin();
    this.loadSkill();
    
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

    this.$swithSkill.$modal.subscribe((value)=>{
      this.modalSkill = value;
    });
  }

  loadSkill():void{
    this.skillService.getSkills().subscribe((data)=>{
      this.skills = data;
      console.log(this.skills);
    });
  }
  openModalSkill(){
    this.modalSkill = true;
  }
  openModalSkillUpd(){
    this.modalSkillUpd = true;
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
  deleteSkill(id:number):void{
    if(id != undefined){
      this.skillService.deleteSkill(id).subscribe(()=>{
        this.loadSkill();
      }, err => {
        alert("Error al eliminar la skill")
      });
    }
  }
  updateDomainBar(value:number){

  }
}
