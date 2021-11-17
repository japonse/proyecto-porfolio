import { Component, OnInit, Input} from '@angular/core';
import {ElementRef} from '@angular/core';
import {lightTheme} from 'src/app/themes/light-theme';
import {darkTheme} from 'src/app/themes/dark-theme';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() headerConsoleComand?: string = "";

  headerConsoleRoute:string         = "";
  headerConsoleDesiredComand:string = "cd Ampersand";
  currentTheme                      = darkTheme;

  urlImg: string  = "https://avatars.githubusercontent.com/u/67862213?s=400&amp;u=df6f061706ddf5427b28fa2d5cd031932e626238&amp;v=4";
  urlImg2: string = "https://www.solucionex.com/sites/default/files/posts/imagen/css_blog.png"

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.typeLetter();
  }

  typeLetter(): void{
    var headerConsoleComandLength:number = (this.headerConsoleComand) ? this.headerConsoleComand.length : 0;
    this.headerConsoleComand = this.headerConsoleDesiredComand.substr(0, headerConsoleComandLength +1);
    if(this.headerConsoleComand.length < this.headerConsoleDesiredComand.length){
      setTimeout(()=>{this.typeLetter()},100);
    }else{
      setTimeout(()=>{
        this.headerConsoleRoute  = "Ampersand";
        this.headerConsoleComand = "_";
      },300);
    }
  }

  getUsers(): void{

  }

  changeTheme():void{
    this.currentTheme = (this.currentTheme.name  == 'dark') ? lightTheme : darkTheme;

    for (const property in this.currentTheme.properties) {
      this.elementRef.nativeElement.closest('body').style.setProperty(property,this.currentTheme.properties[property]);
    }
  }

  execAmpersandShell(){
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
        this.headerConsoleComand = "Type 'theme dark' or 'theme light' to change between themes."
      break;
      case '':
        this.headerConsoleComand = "Type 'theme dark' or 'theme light' to change between themes."
      break;
      case 'command not found':
        this.headerConsoleComand = ""
      break;
      default:
        this.headerConsoleComand = "Command not found";
      break;
    }
  }

}
