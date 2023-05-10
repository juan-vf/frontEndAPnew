import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education-service';
import { ModalSwitchService } from 'src/app/service/modal-switch.service';

@Component({
  selector: 'app-edu-modal',
  templateUrl: './edu-modal.component.html',
  styleUrls: ['./edu-modal.component.css']
})
export class EduModalComponent {

  switchEdu!: boolean;

  id: number;
  tittle: string = '';
  instituteName: string = '';
  instituteLogo: string = '';
  instituteCertification: string = '';
  startActivityDate!: Date;
  endActivityDate!: Date;
  descriptionOptional: string = '';

  constructor(private $modalSwService: ModalSwitchService, private educationService: EducationService, private router: Router){}


  closeModalEdu(){
    this.$modalSwService.$modal.emit(false);
  }
  loadEdu(){
    const edu = new Education(this.tittle,
      this.instituteName, 
      this.instituteLogo, 
      this.instituteCertification, 
      this.startActivityDate, 
      this.endActivityDate, 
      this.descriptionOptional);

    this.educationService.saveEdu(edu).subscribe(data => {
      alert("Educacion añadida");
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
