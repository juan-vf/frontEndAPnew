import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ModalSwitchService } from 'src/app/service/modal-switch.service';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-prj-modal',
  templateUrl: './prj-modal.component.html',
  styleUrls: ['./prj-modal.component.css']
})
export class PrjModalComponent {

  nameProject: string;
  descriptionProject: string;
  linkProject: string;
  startActivityDate: Date;
  endActivityDate: Date;
  imagesProject: Array<string>;

  constructor(private $modalSwService: ModalSwitchService, private projectService: ProjectService, private router: Router){}

  closeModalPrj(){
    this.$modalSwService.$modal.emit(false);
  }
  loadPrj(){
    const prj = new Project(this.nameProject, this.descriptionProject, this.linkProject, this.startActivityDate, this.endActivityDate, this.imagesProject);
    
    this.projectService.savePrj(prj).subscribe(data => {
      alert("proyecto añadida");
      this.router.navigate(['']);
      window.location.reload();
    }, err => {
      alert("Fallo");
      this.router.navigate(['']);
      window.location.reload();
    });
  }

}
