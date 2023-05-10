import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about';
import { Person } from 'src/app/model/person.model';
import { AboutService } from 'src/app/service/about.service';
import { ModalSwitchService } from 'src/app/service/modal-switch.service';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  person: Person = new Person("", "");
  about: About[] = [];

  isLogged: boolean = false;
  admin: boolean = false;

  modalAbouUp:boolean = false;
  modalAbt: boolean = false;

  constructor(public personService: PersonService, 
    private tokenService: TokenService, 
    private $swithAbout: ModalSwitchService, 
    private $swithAboutUpd: ModalSwitchService, 
    private aboutService: AboutService,
    private $portIdUpd: ModalSwitchService, ){};

  ngOnInit(): void {
    this.admin = this.isAdmin();
    //traer name and lastName
    this.personService.getPerson().subscribe(data=>{
      console.log(data);
      this.person = data
    })
    this.loadAbout();
    // this.aboutService.getAbout().subscribe();
    this.$swithAboutUpd.$modal.subscribe((value)=>{
      this.modalAbouUp = value;
    })

    this.$swithAbout.$modal.subscribe((value)=>{
      this.modalAbt = value;
    });

    //traer tittle and description About

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  };

  loadAbout():void{
    this.aboutService.getAbout().subscribe(data => {
      this.about = data;
      console.log(data);
    });
  }
  public isAdmin():boolean{
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

  openModalAbt(){
    this.modalAbt = true;
  }
  
  openModalAboutUpd(id:number){
    this.modalAbouUp = true;
    this.$portIdUpd.$modal.emit(id);
    console.log(id);
    
  }
  deleteAbout(id:number){
    if(id != undefined){
      this.aboutService.deleteAbt(id).subscribe( data => {
        this.loadAbout();
      }, err => {
        alert("Error al eliminar about")
      });
    }
  }

}
