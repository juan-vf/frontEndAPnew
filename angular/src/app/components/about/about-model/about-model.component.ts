import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/service/about.service';
import { ModalSwitchService } from 'src/app/service/modal-switch.service';

@Component({
  selector: 'app-about-model',
  templateUrl: './about-model.component.html',
  styleUrls: ['./about-model.component.css']
})
export class AboutModelComponent {

  modalAbt: boolean;

  Title: string;
  descriptionOfAbt: string;

  constructor(
    private $modalSwService: ModalSwitchService,
    private AboutService:AboutService,
    private router:Router){}


  loadAbt(){
    let abt = new About(this.Title, this.descriptionOfAbt);
    this.AboutService.saveAbt(abt).subscribe(data => {
      alert("About añadida");
      this.router.navigate(['']);
      window.location.reload();
    }, err => {
      alert("Fallo");
      this.router.navigate(['']);
      window.location.reload();
    }
    )
  }
  closeModalAbt(){
    this.$modalSwService.$modal.emit(false);
  }
}
