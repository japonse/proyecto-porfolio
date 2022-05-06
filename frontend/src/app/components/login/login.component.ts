import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string = "";
  borderColor: string = "";
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  authAdmin(): void{
    this.loginService.authAdmin(this.password).subscribe(
      (res) => {
        if(res.authorized === 'true'){
          this.borderColor = "#145748";
        }else{
          this.borderColor = "#850606";
        }
      }
    );
  }

}
