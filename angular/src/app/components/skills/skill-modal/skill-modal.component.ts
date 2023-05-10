import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { ModalSwitchService } from 'src/app/service/modal-switch.service';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skill-modal',
  templateUrl: './skill-modal.component.html',
  styleUrls: ['./skill-modal.component.css']
})
export class SkillModalComponent {
  skill: Skill[] = [];

  nameSkill: string;
  typeSoft: boolean;
  typeHard: boolean;
  skillDomain: number;

  SoftCheck: any;
  HardCheck: any;


  constructor(
    private skillService: SkillService,
    private $swithSkill: ModalSwitchService,
    private router: Router
  ) { }
  ngOnInit() {
    this.SoftCheck = document.getElementById("typeSoft");
    this.HardCheck = document.getElementById("typeHard");
    console.log([this.SoftCheck.checked]);

    this.SoftCheck.addEventListener("change", (element: any) => {
      this.typeSoft = element.target.checked;
      this.typeHard = !element.target.checked;
    });
    this.HardCheck.addEventListener("change", (element: any) => {
      this.typeHard = element.target.checked;
      this.typeSoft = !element.target.checked;
    });
  }
  closeModalSkill() {
    this.$swithSkill.$modal.emit(false);
  }
  loadAbt() {
    let skill = new Skill(this.nameSkill, this.typeSoft, this.typeHard, this.skillDomain);

    this.skillService.saveSkill(skill).subscribe((data) => {
      alert("Skill añadida");
      this.router.navigate(['']);
      window.location.reload();
    }, err => {
      alert("Fallo");
      this.router.navigate(['']);
      window.location.reload();
    }
    )
  }
}
