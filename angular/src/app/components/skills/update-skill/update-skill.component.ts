import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { ModalSwitchService } from 'src/app/service/modal-switch.service';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class UpdateSkillComponent {
  skill:Skill;
  nameSkill: string;
  typeSoft: boolean;
  typeHard: boolean;
  skillDomain: number;

  SoftCheck:any;
  HardCheck:any;
  constructor(
    private $swithSkillUpd: ModalSwitchService,
    private SkillService:SkillService,
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private $portIdUpd: ModalSwitchService
  ){}
  ngOnInit(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.SkillService.getSkillById(id).subscribe((skill)=>{
      this.skill = skill;
      console.log(skill);
      
    }, err => {
      alert("Fallo la actualización");
      this.router.navigate(['']);
    });
  }
  updateSkill(){
    const id = this.activatedRoute.snapshot.params['id'];

    this.SkillService.updateSkill(id, this.skill).subscribe((data)=>{
      console.log(this.skill);
      
      this.router.navigate(['']);
    }, err => {
      alert("Fallo la actualización");
      this.router.navigate(['']);
      // window.location.reload();
    });
  }
  closeModalSkillUpd(){
    this.router.navigate(['']);
    this.$swithSkillUpd.$modal.emit(false);
  }

}
