import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password:string = "";

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  getTest(): void{
    this.loginService.pruebaGet().subscribe(
      (res) => {
        console.log(res)
      }
    );
    
  }

}
