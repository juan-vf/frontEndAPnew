import { Component } from '@angular/core';
import { ModalSwitchService } from 'src/app/service/modal-switch.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLogged:boolean = false;
  modalSwitch!: boolean;

  constructor(private $modalSwService: ModalSwitchService, private tokenService: TokenService){}

  ngOnInit(){
    // this.openModalLogin()
    this.$modalSwService.$modal.subscribe((value)=>{
      this.modalSwitch = value
    })

    if(this.tokenService.getToken()){
      this.isLogged = true;

    }else{
      this.isLogged = false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  openModalLogin():void{
    this.modalSwitch = true;
  }

}
