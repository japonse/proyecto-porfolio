import { Component, OnInit, Input } from '@angular/core';
import {ElementRef} from '@angular/core';
import {lightTheme} from 'src/app/themes/light-theme';
import {darkTheme} from 'src/app/themes/dark-theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headerConsoleComand?: string = "";

  currentTheme                      = darkTheme;
  headerConsoleRoute:string         = "";
  headerConsoleDefaultComand:string = "cd Ampersand";

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.typeLetter();
  }

  typeLetter(): void{
    var headerConsoleComandLength:number = (this.headerConsoleComand) ? this.headerConsoleComand.length : 0;
    this.headerConsoleComand = this.headerConsoleDefaultComand.substr(0, headerConsoleComandLength +1);

    if(this.headerConsoleComand.length < this.headerConsoleDefaultComand.length){
      setTimeout(()=>{
        this.typeLetter()
      }, 100);
    }else{
      setTimeout(()=>{
        this.headerConsoleRoute  = "Ampersand";
        this.headerConsoleComand = "_";
      }, 300);
    }
  }

  changeTheme():void{
    this.currentTheme = (this.currentTheme.name  == 'dark') ? lightTheme : darkTheme;

    for (const property in this.currentTheme.properties) {
      this.elementRef.nativeElement.closest('body').style.setProperty(property,this.currentTheme.properties[property]);
    }
  }

  execAmpersandShell():void{
    switch(this.headerConsoleComand && this.headerConsoleComand.toLowerCase() || ""){
      case 'theme light':
        this.currentTheme = darkTheme;
        this.changeTheme();
        this.headerConsoleComand = "💡";
      break;
      case 'theme dark':
        this.currentTheme = lightTheme;
        this.changeTheme();
        this.headerConsoleComand = "🦇";
      break;
      case 'ampersand_':
        this.headerConsoleComand = "help";
      break;
      case 'help':
        this.headerConsoleComand = "Type 'theme dark' or 'theme light' to change between themes (PRESS ENTER TO CLEAR)"
      break;
      case '':
        this.headerConsoleComand = "Type 'theme dark' or 'theme light' to change between themes (PRESS ENTER TO CLEAR)"
      break;
      default:
        this.headerConsoleComand = "";
      break;
    }
  }
}
