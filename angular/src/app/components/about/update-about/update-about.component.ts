import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/service/about.service';
import { ModalSwitchService } from 'src/app/service/modal-switch.service';

@Component({
  selector: 'app-update-about',
  templateUrl: './update-about.component.html',
  styleUrls: ['./update-about.component.css']
})
export class UpdateAboutComponent {
  about:About;
  Title:string;
  descriptionOfAbt:string;
  modalAbouUp:boolean = false;
  id:number;


  constructor(
    private $swithAboutUpd: ModalSwitchService,
    private AboutService:AboutService,
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private $portIdUpd: ModalSwitchService
  ){}
  ngOnInit(){

    this.$portIdUpd.$modal.subscribe(data => {
      this.id = data;
      console.log(data);
    });

    const id = this.activatedRoute.snapshot.params['id'];
    this.AboutService.getAbtById(id).subscribe((abt)=>{
      this.about = abt;
    }, err => {
      alert("Fallo la actualización");
      this.router.navigate(['']);
    });
  }

  updateAbt(){
    const id = this.activatedRoute.snapshot.params['id'];
    
    this.AboutService.updateAbt(id, this.about).subscribe((data) => {
      this.router.navigate(['']);
    }, err => {
      alert("Fallo la actualización");
      this.router.navigate(['']);
      // window.location.reload();
    });
  }

  closeModalAboutUpd(){
    // this.$swithAboutUpd.$modal.emit(false);
    this.router.navigate(['']);
    this.$swithAboutUpd.$modal.emit(false);
  }
}
