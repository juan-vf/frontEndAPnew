import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience-service';
import { ModalSwitchService } from 'src/app/service/modal-switch.service';
import { UpdateExpService } from 'src/app/service/update-exp.service';

@Component({
  selector: 'app-update-exp',
  templateUrl: './update-exp.component.html',
  styleUrls: ['./update-exp.component.css']
})
export class UpdateExpComponent {
  expUp: Experience = null;
  switchExp!: boolean;
  expUdaId!: number;

  constructor(private experienceService: ExperienceService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private $modalSwService: ModalSwitchService, 
    private $switchId: UpdateExpService){}
    
  ngOnInit():void{
    this.$switchId.$modal.subscribe(data => {
      this.expUdaId = data;
      console.log(this.expUdaId);
    });
    
      const id = this.activatedRoute.snapshot.params['id'];
      // const id = this.expUdaId
      // console.log(id);
      
      
      this.experienceService.getExpById(id).subscribe(data => {
        console.log(data);
        
        this.expUp = data;
      }, err => {
        alert("Fallo la actualización");
        this.router.navigate(['']);
      });
  }

  updateExp():void{
    const id = this.activatedRoute.snapshot.params['id'];
    //  let id = this.expUdaId;
    
    this.experienceService.updateExp(id, this.expUp).subscribe( data => {
      this.router.navigate(['']);
      // window.location.reload();
    }, err => {
      alert("Fallo la actualización");
      this.router.navigate(['']);
      // window.location.reload();
    });
  }

  closeModalExpUpd():void{
    this.router.navigate(['']);
    this.$modalSwService.$modal.emit(false);
  }
}
