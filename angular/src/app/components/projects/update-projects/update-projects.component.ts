import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ModalSwitchService } from 'src/app/service/modal-switch.service';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-update-projects',
  templateUrl: './update-projects.component.html',
  styleUrls: ['./update-projects.component.css']
})
export class UpdateProjectsComponent {
  prjUp: Project = null;

  switchPrj!: boolean;
  constructor(private projectService: ProjectService, private activatedRoute: ActivatedRoute, 
    private router: Router, private $modalSwService: ModalSwitchService,){}

ngOnInit():void{
  const id = this.activatedRoute.snapshot.params['id'];
      // const id = this.expUdaId
      // console.log(id);
      
      
      this.projectService.getPrjById(id).subscribe(data => {
        this.prjUp = data;
      }, err => {
        alert("Fallo la actualización");
        this.router.navigate(['']);
      });
}
updatePrj():void{
  const id = this.activatedRoute.snapshot.params['id'];

  this.projectService.updatePrj(id, this.prjUp).subscribe(data => {
    this.router.navigate(['']);
    // window.location.reload();
  }, err => {
    alert("Fallo la actualización");
    this.router.navigate(['']);
    // window.location.reload();
  });
}

closeModalPrjUpd():void{
  this.router.navigate(['']);
  this.$modalSwService.$modal.emit(false);
}

}
