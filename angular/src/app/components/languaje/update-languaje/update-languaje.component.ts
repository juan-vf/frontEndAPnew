import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Languaje } from 'src/app/model/languaje';
import { LanguajeService } from 'src/app/service/languaje.service';
import { ModalSwitchService } from 'src/app/service/modal-switch.service';

@Component({
  selector: 'app-update-languaje',
  templateUrl: './update-languaje.component.html',
  styleUrls: ['./update-languaje.component.css']
})
export class UpdateLanguajeComponent {

  langUp: Languaje;


  constructor(
    private LanguajeService:LanguajeService,
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private $modalSwService: ModalSwitchService,
  ){}

  ngOnInit(){

    const id = this.activatedRoute.snapshot.params['id'];
    this.LanguajeService.getLangById(id).subscribe((data)=>{
      console.log(this.langUp);
      
      this.langUp = data;
    }, err => {
      alert("Fallo la carga de datos");
      this.router.navigate(['']);
    });
  }
  updateLang(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.LanguajeService.updateLang(id, this.langUp).subscribe((data)=>{
      this.router.navigate(['']);
    }, err => {
      alert("Fallo la actualización");
      this.router.navigate(['']);
      // window.location.reload();
    });
  }
  closeModalLangUpd():void{
    this.router.navigate(['']);
    this.$modalSwService.$modal.emit(false);
  }

}
