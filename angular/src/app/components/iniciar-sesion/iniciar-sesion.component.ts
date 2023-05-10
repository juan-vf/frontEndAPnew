import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/model/login-user';
import { AuthService } from 'src/app/service/auth.service';
import { ModalSwitchService } from 'src/app/service/modal-switch.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  modalSwitch!: boolean;

  isLogged: boolean = false;
  isLogginFail: boolean = false;
  loginUser!: LoginUser;
  userName!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private formBuilder: FormBuilder, private router: Router, private $modalSwService: ModalSwitchService) {
    // this.form=this.formBuilder.group(
    //   {

    //   }
    // )
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }

  }

  public onLogin(): void {
    this.loginUser = new LoginUser(this.userName, this.password)
    this.authService
      .loginUser(this.loginUser).subscribe(
        data => {
          this.isLogged = true;
          this.isLogginFail = false;
          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.userName);
          this.tokenService.setAuthorities(data.authorities);
          this.roles = data.authorities;
          this.router.navigate(['']);
          this.$modalSwService.$modal.emit(false)
          window.location.reload();

        }, err => {
          this.isLogged = false;
          this.isLogginFail = true;
          this.errMsj = err.message          ;
          console.log(this.errMsj);


        });
  }


  closeModalLogin(): void {
    this.$modalSwService.$modal.emit(false)
    //this.modalSwitch = false;
  }

}
