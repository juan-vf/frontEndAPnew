import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Languaje } from 'src/app/model/languaje';
import { LanguajeService } from 'src/app/service/languaje.service';
import { ModalSwitchService } from 'src/app/service/modal-switch.service';

@Component({
  selector: 'app-languaje-modal',
  templateUrl: './languaje-modal.component.html',
  styleUrls: ['./languaje-modal.component.css']
})
export class LanguajeModalComponent {

  languaje: string;
  lanjuageDomain: string;
  lanjuageDomainNumber: number;

  constructor(
    private $modalSwService: ModalSwitchService,
    private LanguajeService:LanguajeService,
    private router:Router){}

  loadLang(){
    let lang = new Languaje(this.languaje, this.lanjuageDomain, this.lanjuageDomainNumber);
    this.LanguajeService.saveLang(lang).subscribe((data)=>{
      alert("Lenguaje añadido");
      this.router.navigate(['']);
      window.location.reload();
    }, err => {
      alert("Fallo");
      this.router.navigate(['']);
      window.location.reload();
    }
    )
  }
  closeModalLang(){
    this.$modalSwService.$modal.emit(false);
  }
}
