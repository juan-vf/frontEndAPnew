import { Component } from '@angular/core';
import { Languaje } from 'src/app/model/languaje';
import { LanguajeService } from 'src/app/service/languaje.service';
import { ModalSwitchService } from 'src/app/service/modal-switch.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-languaje',
  templateUrl: './languaje.component.html',
  styleUrls: ['./languaje.component.css']
})
export class LanguajeComponent {
  languajes: Languaje[] = [];

  modalLang:boolean = false;
  modalLangUpd:boolean = false;
  langUpdId!:boolean;

  private admin: boolean = false;
  private isLogged:boolean = false;

  constructor(
    private languajeService:LanguajeService,
    private tokenService:TokenService,
    private $swithLang: ModalSwitchService, 
    private $switchUpdLang: ModalSwitchService,
  ){}

  ngOnInit(){
    this.admin = this.isAdmin()

    this.$swithLang.$modal.subscribe((value)=>{
      this.modalLang = value;
    });
    this.$switchUpdLang.$modal.subscribe((value)=>{
      this.modalLangUpd = value;
    });
    this.loadLang()
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }


  private loadLang():void{
    this.languajeService.getLanguaje().subscribe((lang)=>{
      this.languajes = lang;
    });
  }
  private isAdmin():boolean{
    let auths =  this.tokenService.getAuthorities();
    let admin;
    auths.filter((auth)=> {if(String(Object.values(auth)) === 'ROLE_ADMIN'){
      admin = "Admin"
    }
    });
    if(admin != undefined){
      return true;
    }
    return false;
  }
  openModalLang():void{
    this.modalLang = true;
  }
  openModalLangUpd():void{
    this.modalLangUpd = true;
  }
  deleteLang(id:number):void{
    if(id != undefined){
      this.languajeService.deleteLang(id).subscribe(data => {
        this.loadLang();
      }, err => {
        alert("Error al eliminar lenguaje")
      })
    }
  }

  public getLogged():boolean{
    return this.isLogged;
  }
  public getAdmin():boolean{
    return this.admin;
  }

}
