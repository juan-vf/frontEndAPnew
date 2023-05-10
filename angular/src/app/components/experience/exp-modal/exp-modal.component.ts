import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService} from 'src/app/service/experience-service';
import { ModalSwitchService } from 'src/app/service/modal-switch.service';

@Component({
  selector: 'app-exp-modal',
  templateUrl: './exp-modal.component.html',
  styleUrls: ['./exp-modal.component.css']
})
export class ExpModalComponent {
  switchExp!: boolean;

  //data for load exp
    id!: number;
    positionTitle:string = '';
    companyLogo:string = '';
    descriptionOfActivities:string = '';
    startActivityDate!: Date;
    endActivityDate!: Date;

  constructor(
    private $modalSwService: ModalSwitchService, 
    private experienceService: ExperienceService, 
    private router: Router){}

  closeModalExp(){
    this.$modalSwService.$modal.emit(false);
  }
  // loadExp(){}

  loadExp():void{
    const exp = new Experience(this.positionTitle, this.companyLogo, this.descriptionOfActivities, this.startActivityDate, this.endActivityDate);

    this.experienceService.saveExp(exp).subscribe(data => {
      alert("Experiencia añadida");
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
